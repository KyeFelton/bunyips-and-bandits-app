import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Whip: Item = {
  name: "Whip",
  description: "A whip for herding cattle. Produces a loud crack noise when wielded correctly.",
  singleUse: false,
  slots: 1,
  defaultCost: 10,
  itemType: ItemType.Tool,
};
