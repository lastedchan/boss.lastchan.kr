import type { NextApiRequest, NextApiResponse } from "next";
import { get } from "@/libs/db";
import { BossList } from "@/types/boss";

export default async function handler(req: NextApiRequest, res: NextApiResponse<BossList>) {
  const period = req.query.period;
  const data = await get<BossList>(
    `select boss.*, COUNT(distinct bd.difficulty) as difficulty_count
    from boss
    left join boss_difficulty bd on boss.id = bd.boss_id ${period ? `and period like '%${period}%'` : ``}
    group by boss.id
    having difficulty_count > 0`
  );

  res.json(data);
}
