import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const WalkingDress: Item = {
  name: "Walking dress",
  description: "A tailored jacket and long skirt, designed for outdoor activities and travelling.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
