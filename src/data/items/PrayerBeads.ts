import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { SkillType } from "../../enums/SkillType";

export const PrayerBeads: Item = {
  name: "Prayer beads",
  description: "A string of smooth wooden beads worn as an aid to contemplation and focus.",
  equippedEffects: [
    {
      skill: {
        skillType: SkillType.Willpower,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
