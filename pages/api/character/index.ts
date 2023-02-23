import type { NextApiRequest, NextApiResponse } from "next";
import { get } from "@/libs/db";
import { CharacterList } from "@/types/crystalCalc";

export default async function handler(req: NextApiRequest, res: NextApiResponse<CharacterList>) {
  const data = await get<CharacterList>("select * from `character`");
  res.json(data);
}
