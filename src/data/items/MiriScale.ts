import { SkillType } from "../../enums/SkillType";
import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";

export const MiriScale: Item = {
  name: "Rainbow scale",
  description:
    "A large, colourful scale believed to belong to the Rainbow Serpent.",
  equippedEffects: [
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
  wearType: WearType.Accessory,
  slots: 1,
  defaultCost: 3000,
};
