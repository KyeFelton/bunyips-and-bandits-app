import { Item } from "../../models/items";
import { SkillType } from "../../enums/SkillType";

export const PerfumeOfBewitching: Item = {
  name: "Perfume of bewitching",
  description: "Whilst worn, you have +2 bonus to charisma checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  weight: 0.2,
  defaultCost: 520,
};
