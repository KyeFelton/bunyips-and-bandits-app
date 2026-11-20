import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FlatCap: Item = {
  name: "Flat cap",
  description: "A soft cloth cap with a short brim, commonly worn by working men.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
