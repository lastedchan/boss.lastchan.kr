import type { NextApiRequest, NextApiResponse } from "next";
import { first, get } from "@/libs/db";
import { Boss, BossDifficulty } from "@/types/boss";
import { isSafeInteger } from "lodash";

export default async function handler(req: NextApiRequest, res: NextApiResponse<Boss | null>) {
  const boss = await first<Boss>(`select name from boss where id = ?`, [req.query.id]);
  const where = [
    ["boss_id", "=", req.query.id],
    ["period", "=", req.query.period],
  ];
  const difficulty = await get<BossDifficulty[]>(
    `select boss_id, difficulty, period, price
    from boss_difficulty
    where ${where
      .filter(_ => _[2])
      .map(_ => {
        if (!isSafeInteger(_[2])) _[2] = "'" + _[2] + "'";
        return _.join(" ");
      })
      .join(" and ")}
  `,
    where.map(_ => _[2])
  );
  res.json({ ...boss, difficulty });
}
