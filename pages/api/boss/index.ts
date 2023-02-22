import type { NextApiRequest, NextApiResponse } from "next";
import { get } from "@/libs/db";
import { BossList } from "@/types/bossList";

export default async function handler(req: NextApiRequest, res: NextApiResponse<BossList>) {
  const data = await get<BossList>("select * from boss");
  res.json(data);
}
