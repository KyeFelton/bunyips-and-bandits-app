import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const DjugiPoisonSac: Item = {
  name: "Djugi poison sac",
  consumedEffect: {
    custom:
      "When thrown, the sac bursts and unleashes acid. Targets take 3 {{damage:toxic}} damage.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 90,
  itemType: ItemType.Ammunition,
};
