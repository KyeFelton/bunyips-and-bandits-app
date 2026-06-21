import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Antidote: Item = {
  name: "Antidote",
  description: "Restores health when drunk within one minute of taking toxic damage.",
  consumedEffect: {
    body: 1,
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 50,
  itemType: ItemType.Medical,
};
