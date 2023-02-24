import type { NextApiRequest, NextApiResponse } from "next";
import { first } from "@/libs/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      const name = req.body.name;
      const password = req.body.password;

      if (!name || password) return res.status(400).json({ message: "로그인에 필요한 데이터가 부족합니다." });

      const user = await first(`select id from user where name=? and password=?`, [name, password]);

      res.json(user);
      break;
    default:
      res.status(405).send("");
  }
}
