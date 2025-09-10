import { Item } from "../../models/items";

export const SmokeBomb: Item = {
  name: "Smoke bomb",
  description:
    "The bomb explodes with a plume of smoke upon ignition. Targets within 1m of the explosion take 1 force damage. Targets within 3m are blinded.",
  effects: [],
  singleUse: true,
  weight: 0.3,
  defaultCost: 175,
};
