import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const MilitaryCap: Item = {
  name: "Military cap",
  description: "A structured cap decorated with the insignia of your allegiance.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
