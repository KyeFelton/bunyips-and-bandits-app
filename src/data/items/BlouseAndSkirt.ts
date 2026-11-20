import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const BlouseAndSkirt: Item = {
  name: "Blouse and skirt",
  description: "A buttoned blouse paired with a long skirt for everyday activities.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
