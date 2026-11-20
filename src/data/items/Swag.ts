import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Swag: Item = {
  name: "Swag",
  description: "A portable bed for a traveller",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
