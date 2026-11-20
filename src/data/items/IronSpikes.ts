import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const IronSpikes: Item = {
  name: "Iron spikes",
  description: "Can be hammered in like nails. Useful for jamming doors shut or creating a makeshift trap.",
  singleUse: false,
  slots: 0.2,
  stackable: true,
  defaultCost: 1,
  itemType: ItemType.Tool,
};
