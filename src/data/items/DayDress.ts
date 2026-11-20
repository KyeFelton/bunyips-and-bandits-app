import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const DayDress: Item = {
  name: "Day dress",
  description: "A practical, modest dress with a fitted bodice and long skirt, suitable for everyday wear.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
