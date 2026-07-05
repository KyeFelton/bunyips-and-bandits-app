import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Adrenaline: Item = {
  name: "Adrenaline shot",
  consumedEffect: {
    stamina: 2,
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 125,
  itemType: ItemType.Medical,
};
