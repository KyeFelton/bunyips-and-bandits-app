import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const MobCap: Item = {
  name: "Mob cap",
  description: "A simple gathered fabric cap that covers the hair, commonly worn by working women.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
