import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const CorkHat: Item = {
  name: "Cork hat",
  description: "A hat with corks hanging from strings around the brim to deter flies.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
