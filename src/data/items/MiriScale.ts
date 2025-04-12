import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";

export const MiriScale: Item = {
  name: "Miri's scale",
  description:
    "A large, rainbow scale believed to belong Miri. Being in possession of the scale grants you +3 bonus to nature and spirit checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Nature,
        bonus: 3,
      },
    },
    {
      skill: {
        skillType: SkillType.Spirit,
        bonus: 3,
      },
    },
  ],
  singleUse: false,
  weight: 2,
  defaultCost: 3000,
};
