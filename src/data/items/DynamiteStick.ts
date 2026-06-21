import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const DynamiteStick: Item = {
  name: "Dynamite stick",
  consumedEffect: {
    custom:
      "The dynamite explodes upon ignition. Targets within 3m take 5 force damage. The dynamite can be stacked, with each additional stick adding 1 force damage.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 500,
  itemType: ItemType.Explosive,
};
