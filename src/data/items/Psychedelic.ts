import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { PsychicBoost } from "../../models/conditions";

export const Psychedelic: Item = {
  name: "Psychedelic",
  consumedEffect: {
    condition: PsychicBoost.name,
    custom:
      "If you have already consumed a psychedelic since your last rest, you also take 1 damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 300,
  itemType: ItemType.Concoction,
};
