import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const LovePotion: Item = {
  name: "Love potion",
  description: "",
  consumedEffect: {
    custom:
      "You must pass a hard willpower check or gain the Infatuated condition with the first creature you see.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 450,
  itemType: ItemType.Concoction,
};
