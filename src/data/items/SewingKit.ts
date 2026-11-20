import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SewingKit: Item = {
  name: "Sewing kit",
  description: "A kit containing thread, needles, scissors, measuring tape, a thimble and other sewing tools. Can be used to make and mend clothes.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
