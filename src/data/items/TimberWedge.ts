import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const TimberWedge: Item = {
  name: "Timber wedge",
  description: "A wedge made of wood.",
  singleUse: false,
  slots: 0.2,
  itemType: ItemType.Tool,
};
