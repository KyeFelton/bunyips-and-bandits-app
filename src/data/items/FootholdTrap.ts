import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FootholdTrap: Item = {
  name: "Foothold trap",
  description: "A steel foothold trap.",
  singleUse: false,
  slots: 1,
  defaultCost: 25,
  itemType: ItemType.Tool,
};
