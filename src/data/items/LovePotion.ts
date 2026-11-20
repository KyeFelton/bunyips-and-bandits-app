import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { Infatuated } from "../../models/conditions";

export const LovePotion: Item = {
  name: "Love potion",
  description: "A vial of sparkling pink liquid.",
  consumedEffect: {
    custom:
      `Upon drinking, you must pass a hard {{skill:Willpower}} check or gain the ${Infatuated.name} condition with the first creature you see.`,
  },
  singleUse: true,
  slots: 1,
  defaultCost: 450,
  itemType: ItemType.Consumable,
};
