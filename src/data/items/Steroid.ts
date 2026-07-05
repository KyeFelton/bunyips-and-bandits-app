import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { StrengthBoost } from "../../models/conditions";

export const Steroid: Item = {
  name: "Steroid",
  consumedEffect: {
    condition: StrengthBoost.name,
    custom:
      "If you have already consumed a steroid since your last rest, take 1 damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 110,
  itemType: ItemType.Concoction,
};
