import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const DenimOveralls: Item = {
  name: "Denim overalls",
  description: "A set of denim overalls with a shirt and trousers underneath.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
