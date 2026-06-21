import { Item } from "../../models/items";

export const VialOfPotentAcid: Item = {
  name: "Vial of potent acid",
  consumedEffect: {
    custom:
      "When thrown at a target, they take 1 toxic damage. If ingested or injected with a coated weapon, they take 3 toxic damage.",
  },
  equippedEffects: [],
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 150,
};
