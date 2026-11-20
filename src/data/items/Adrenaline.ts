import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Adrenaline: Item = {
  name: "Adrenaline shot",
  consumedEffect: {
    stamina: 2,
    custom:
      "If you have already consumed an Adrenaline Shot since your last rest, you also take 1 damage.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 125,
  itemType: ItemType.Consumable,
};
