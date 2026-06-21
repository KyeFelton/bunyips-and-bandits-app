import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Steroid: Item = {
  name: "Steroid",
  consumedEffect: {
    condition: "Steroid Boost",
    custom:
      "+1 bonus to strength and agility checks until your next rest. If you already have this condition and consume another, you also take 2 damage. At most three Steroid Boost conditions can be active at one time.",
  },
  singleUse: true,
  slots: 1,
  stackable: true,
  defaultCost: 110,
  itemType: ItemType.Concoction,
};
