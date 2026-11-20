import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const VialOfPotentAcid: Item = {
  name: "Vial of potent acid",
  consumedEffect: {
    custom:
      "When thrown at a target, they take 1 {{damage:toxic}} damage. If ingested or injected with a coated weapon, they take 3 {{damage:toxic}} damage.",
  },
  equippedEffects: [],
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 150,
  itemType: ItemType.Consumable,
};
