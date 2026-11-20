import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const StageCostume: Item = {
  name: "Stage costume",
  description: "A colourful, decorative costume worn onstage to entertain an audience.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
