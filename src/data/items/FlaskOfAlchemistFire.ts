import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FlaskOfAlchemistFire: Item = {
  name: "Flask of alchemist fire",
  consumedEffect: {
    custom: "Can be thrown at a target to make them catch fire.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 50,
  itemType: ItemType.Ammunition,
};
