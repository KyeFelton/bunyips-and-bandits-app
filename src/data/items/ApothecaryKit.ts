import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const ApothecaryKit: Item = {
  name: "Apothecary kit",
  description:
    "A kit containing scissors, tweezers, a filter cloth, a few empty vials, and a mortar with pestle. Can be used to make concoctions and potions.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
