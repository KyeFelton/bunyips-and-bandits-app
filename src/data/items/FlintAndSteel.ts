import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FlintAndSteel: Item = {
  name: "Flint and steel",
  description:
    "A small fire starter. With it, routine attempts to light a fire always succeed.",
  singleUse: false,
  slots: 1,
  defaultCost: 5,
  itemType: ItemType.Gear,
};
