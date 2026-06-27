import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Pole: Item = {
  name: "Pole (3m)",
  description: "Probes pits and reaches distant objects.",
  singleUse: false,
  slots: 2,
  defaultCost: 5,
  itemType: ItemType.Gear,
};
