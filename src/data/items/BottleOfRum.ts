import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const BottleOfRum: Item = {
  name: "Bottle of rum",
  description: "A dark glass bottle of rough colonial rum. Takes the edge off a hard day's work.",
  singleUse: true,
  stackable: true,
  slots: 0.5,
  itemType: ItemType.Food,
};
