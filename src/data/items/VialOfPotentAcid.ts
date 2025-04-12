import { Item } from "../../models/items";

export const VialOfPotentAcid: Item = {
  name: "Vial of potent acid",
  description:
    "When thrown at a target, they take 5 toxic damage. If ingested or injected with a coated weapon, they take 15 poison damage.",
  effects: [],
  singleUse: true,
  weight: 0.15,
  defaultCost: 150,
};
