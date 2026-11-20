import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SoothingHerb: Item = {
  name: "Soothing herb",
  consumedEffect: {
    mind: 1,
    custom:
      "Additional soothing herbs consumed in the same day have no effect.",
  },
  singleUse: true,
  slots: 1,
  defaultCost: 150,
  itemType: ItemType.Consumable,
};
