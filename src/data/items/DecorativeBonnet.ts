import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const DecorativeBonnet: Item = {
  name: "Decorative bonnet",
  description: "A fashionable bonnet that can be decorated with ribbons, lace and other ornaments.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
