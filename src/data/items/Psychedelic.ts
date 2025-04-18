import { Item } from "../../models/items";

const MildPsychedelic: Item = {
  name: "Mild psychedelic",
  description:
    "When consumed, you gain +1 bonus to psychic checks for the next hour. If you have already consumed a psychedlic within the last hour, you also take 1d6 damage. At most three psychedelics can be consumed at one time.",
  effects: [],
  singleUse: true,
  weight: 0.2,
  defaultCost: 85,
};

const StrongPsychedelic: Item = {
  name: "Strong psychedelic",
  description:
    "When consumed, you gain +2 bonus to psychic checks for next hour. If you have already consumed a psychedlic within the last hour, you also take 1d12 damage. At most three psychedelics can be consumed at one time.",
  effects: [],
  singleUse: true,
  weight: 0.2,
  defaultCost: 300,
};

export { MildPsychedelic, StrongPsychedelic };
