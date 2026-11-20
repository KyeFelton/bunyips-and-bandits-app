import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const DynamiteStick: Item = {
  name: "Dynamite stick",
  description: "A stick of explosive dynamite.",
  consumedEffect: {
    custom:
      "When ignited, targets within Close range take 5 {{damage:force}} damage, and those within Near range take 2 {{damage:force}} damage. The dynamite can be stacked, with each additional stick adding 1 {{damage:force}} damage.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 500,
  itemType: ItemType.Ammunition,
};
