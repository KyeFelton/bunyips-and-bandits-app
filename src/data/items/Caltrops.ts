import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Caltrops: Item = {
  name: "Caltrops",
  consumedEffect: {
    custom:
      "When stepped on, deals 2 Slash damage and ends movement that turn.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 2,
  itemType: ItemType.Trap,
};
