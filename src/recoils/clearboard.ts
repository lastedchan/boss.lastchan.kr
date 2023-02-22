import { atom, selectorFamily } from "recoil";
import { localStorageEffect } from "@/recoils/index";
import { Character, CharacterList } from "@/types/crystalCalc";
import { changeArray } from "@/libs/helpers";
import { BossType } from "@/types/bossList";

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
  key: "calc.crystal.characterSelector",
  get:
    idx =>
    ({ get }) =>
      get(characterListRecoil)[idx],
  set:
    idx =>
    ({ get, set }, newValue) =>
      set(characterListRecoil, prev => changeArray(prev, idx, newValue as Character)),
});

export const selectedCharacter = atom<number>({
  key: "calc.crystal.selectedCharacter",
  default: -1,
  effects: [localStorageEffect<number>("CalcCrystal_selectedCharacter")],
});
export const selectedType = atom<BossType>({
  key: "calc.crystal.selectedType",
  default: "week",
  effects: [localStorageEffect<BossType>("CalcCrystal_selectedType")],
});
