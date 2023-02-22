import type { NextApiRequest, NextApiResponse } from "next";
import { first } from "@/libs/db";
import { Boss } from "@/types/bossList";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Boss | null>) {
  const data = await first<Boss>("select * from boss where id=?", [req.query.id]);
  res.json(data);
}
