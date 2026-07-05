import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SoothingHerb: Item = {
  name: "Soothing herb",
  consumedEffect: {
    mind: 1,
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 150,
  itemType: ItemType.Concoction,
};
