import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Tongs: Item = {
  name: "Tongs",
  consumedEffect: {
    custom:
      "A heavy set of tongs used by blacksmiths.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 800,
  itemType: ItemType.Tool,
};
