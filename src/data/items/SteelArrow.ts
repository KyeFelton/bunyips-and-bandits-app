import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SteelArrow: Item = {
  name: "Steel arrow",
  description: "A steel-tipped arrow for use with a bow.",
  singleUse: true,
  slots: 0.2,
  defaultCost: 5,
  itemType: ItemType.RangedWeapon,
};
