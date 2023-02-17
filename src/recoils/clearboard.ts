import { atom, selectorFamily } from "recoil";
import { localStorageEffect } from "@/recoils/index";
import { Character, CharacterList } from "@/types/crystalCalc";
import { changeValue } from "@/libs/helpers";

export const isRebootRecoil = atom<boolean>({
  key: "calc.crystal.isReboot",
  default: false,
  effects: [localStorageEffect<boolean>("CalcCrystal_isReboot")],
});

export const characterListRecoil = atom<CharacterList>({
  key: "calc.crystal.characterList",
  default: [],
  effects: [localStorageEffect<CharacterList>("CalcCrystal_characterList")],
});

export const characterSelector = selectorFamily<Character, number>({
  key: "characterSelector",
  get:
    idx =>
    ({ get }) =>
      get(characterListRecoil)[idx],
  set:
    idx =>
    ({ get, set }, newValue) =>
      set(characterListRecoil, prev => changeValue(prev, idx, newValue as Character)),
});
