import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const BustleDress: Item = {
  name: "Bustle dress",
  description: "A fashionable dress with a fitted bodice and exaggerated fullness at the back of the skirt.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
