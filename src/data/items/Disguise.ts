import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { SkillType } from "../../enums/SkillType";
import { WearType } from "../../enums/WearType";

export const Disguise: Item = {
  name: "Disguise",
  description:
    "An inconspicuous outfit with a concealed hood and reversible jacket, designed to help you blend in or disappear.",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Stealth,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  slots: 0,
  wearType: WearType.Clothes,
  itemType: ItemType.Clothing,
};
