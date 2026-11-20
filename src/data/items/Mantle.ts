import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Mantle: Item = {
  name: "Mantle",
  description: "A fashionable, short cloak draped over the shoulders.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
