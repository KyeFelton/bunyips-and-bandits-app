import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Akubra: Item = {
  name: "Akubra",
  description: "A wide-brimmed rabbit fur hat commonly worn by bushmen.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
