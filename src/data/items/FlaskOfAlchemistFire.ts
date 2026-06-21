import { Item } from "../../models/items";

export const FlaskOfAlchemistFire: Item = {
  name: "Flask of alchemist fire",
  consumedEffect: {
    custom: "Can be thrown at a target to make them catch fire.",
  },
  equippedEffects: [],
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 50,
};
