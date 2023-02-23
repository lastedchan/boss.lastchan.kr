import type { NextApiRequest, NextApiResponse } from "next";
import { get } from "@/libs/db";
import { BossList } from "@/types/boss";

export default async function handler(req: NextApiRequest, res: NextApiResponse<BossList>) {
  const period = req.query.period;
  const data = await get<BossList>(
    "select * from boss" + (period ? ` where (select count(1) from boss_difficulty where period='${period}') > 0` : "")
  );
  res.json(data);
}
