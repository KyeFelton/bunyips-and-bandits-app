import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { SkillType } from "../../enums/SkillType";
import { WearType } from "../../enums/WearType";

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
  slots: 0,
  wearType: WearType.Accessory,
  itemType: ItemType.Accessory,
};
