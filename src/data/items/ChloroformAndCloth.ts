import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const ChloroformAndCloth: Item = {
  name: "Chloroform and cloth",
  equippedEffects: [
    {
      custom:
        "When pressed against a target's face for a short duration, the target is knocked unconscious.",
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 220,
  itemType: ItemType.Consumable,
};
