import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SmokeBomb: Item = {
  name: "Smoke bomb",
  consumedEffect: {
    custom:
      "Explodes with a plume of smoke that covers a Near range for 3 rounds. Creatures in the smoke are blinded.",
  },
  equippedEffects: [],
  singleUse: true,
  slots: 1,
  defaultCost: 175,
  itemType: ItemType.Ammunition,
};
