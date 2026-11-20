import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const MakeupKit: Item = {
  name: "Makeup kit",
  description: "A kit containing a compact mirror, powder puff, greasepaint pots, brushes and various other beauty supplies. Can be used to enhance one's appearance or put on a disguise.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
