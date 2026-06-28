import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const DrumKit: Item = {
  name: "Drum kit",
  description: "A small frame drum and a pair of sticks, light enough to carry on the road.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Gear,
};
