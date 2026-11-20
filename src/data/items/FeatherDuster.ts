import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FeatherDuster: Item = {
  name: "Feather duster",
  consumedEffect: {
    stamina: 2,
    custom:
      "A rod with feathers, handy for dusting.",
  },
  singleUse: false,
  slots: 1,
  defaultCost: 1,
  itemType: ItemType.Tool,
};
