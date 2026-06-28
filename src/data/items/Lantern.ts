import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Lantern: Item = {
  name: "Lantern",
  description: "A metal-framed oil lantern that casts a steady light. Brighter and more windproof than a torch, but requires oil to burn.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Gear,
};
