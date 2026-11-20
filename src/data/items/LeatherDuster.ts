import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const LeatherDuster: Item = {
  name: "Leather duster",
  description: "A long leather coat to protect against dust and sun.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
