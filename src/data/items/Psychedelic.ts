import { Item } from "../../models/items";

const MildPsychedelic: Item = {
  name: "Mild psychedelic",
  description:
    "Grants the Psychedelic Trip (Mild) condition until your next rest, providing +1 bonus to psychic checks. If you have already consumed a psychedelic within the last hour, you also take 2 damage. At most three psychedelics can be consumed at one time.",
  immediateEffect: {
    condition: "Psychedelic Trip (Mild)",
  },
  singleUse: true,
  weight: 0.2,
  defaultCost: 85,
};

const StrongPsychedelic: Item = {
  name: "Strong psychedelic",
  description:
    "Grants the Psychedelic Trip (Strong) condition until your next rest, providing +2 bonus to psychic checks. If you have already consumed a psychedelic within the last hour, you also take 2 damage. At most three psychedelics can be consumed at one time.",
  immediateEffect: {
    condition: "Psychedelic Trip (Strong)",
  },
  singleUse: true,
  weight: 0.2,
  defaultCost: 300,
};

export { MildPsychedelic, StrongPsychedelic };
