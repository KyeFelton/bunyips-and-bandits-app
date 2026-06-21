import { Item } from "../../models/items";
import { SkillType } from "../../enums/SkillType";

export const PerfumeOfBewitching: Item = {
  name: "Perfume of bewitching",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 520,
};
