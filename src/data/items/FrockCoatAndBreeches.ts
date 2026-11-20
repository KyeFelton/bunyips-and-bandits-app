import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FrockCoatAndBreeches: Item = {
  name: "Frock coat and breeches",
  description: "A long, fitted coat worn over a shirt and waistcoat for formal occassions.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
