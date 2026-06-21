import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

const MildPsychedelic: Item = {
  name: "Psychedelic (mild)",
  consumedEffect: {
    condition: "Psychedelic Trip (Mild)",
    custom:
      "+1 bonus to psychic checks until your next rest. If you have already consumed a psychedelic within the last hour, you also take 2 damage. At most three psychedelics can be consumed at one time.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 85,
  itemType: ItemType.Concoction,
};

const StrongPsychedelic: Item = {
  name: "Psychedelic (strong)",
  consumedEffect: {
    condition: "Psychedelic Trip (Strong)",
    custom:
      "+2 bonus to psychic checks until your next rest. If you have already consumed a psychedelic within the last hour, you also take 2 damage. At most three psychedelics can be consumed at one time.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 300,
  itemType: ItemType.Concoction,
};

export { MildPsychedelic, StrongPsychedelic };
