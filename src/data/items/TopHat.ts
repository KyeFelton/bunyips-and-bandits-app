import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const TopHat: Item = {
  name: "Top hat",
  description: "A tall, formal hat traditionally worn by wealthy gentlemen and women.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
