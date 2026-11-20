import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const BowlerHat: Item = {
  name: "Bowler hat",
  description: "A stiff felt hat with a rounded crown and short brim, commonly worn by respectable townsfolk and businessmen.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
