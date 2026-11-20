import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { SkillType } from "../../enums/SkillType";

export const FullBodyCloak: Item = {
  name: "Full-body cloak",
  description:
    "A dark, hooded cloak designed to help you blend in and disappear.",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Stealth,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
