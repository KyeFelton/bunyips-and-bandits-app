import { Item } from "../../models/items";

export const SmokeBomb: Item = {
  name: "Smoke bomb",
  consumedEffect: {
    custom:
      "The bomb explodes with a plume of smoke upon ignition. Targets within 1m of the explosion take 1 force damage. Targets within 3m are blinded.",
  },
  equippedEffects: [],
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 175,
};
