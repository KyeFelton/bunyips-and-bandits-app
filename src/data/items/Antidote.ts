import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Antidote: Item = {
  name: "Antidote",
  consumedEffect: {
    body: 2,
    custom: "Only works if drunk within one hour of taking toxic damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 50,
  itemType: ItemType.Consumable,
};
