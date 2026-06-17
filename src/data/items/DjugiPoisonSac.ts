import { Item } from "../../models/items";

export const DjugiPoisonSac: Item = {
  name: "Djugi poison sac",
  description:
    "When thrown, the sac bursts and unleashes acid. Targets take 3 toxic damage.",
  effects: [],
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 90,
};
