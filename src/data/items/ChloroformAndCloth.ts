import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const ChloroformAndCloth: Item = {
  name: "Chloroform and cloth",
  equippedEffects: [
    {
      custom:
        "When pressed against a target's face, the target is knocked unconscious for 30min. It takes 1min to knock a medium or smaller sized creature unconscious, and 5min for a larger creature.",
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 220,
  itemType: ItemType.Poison,
};
