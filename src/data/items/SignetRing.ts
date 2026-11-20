import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const SignetRing: Item = {
  name: "Signet ring",
  description: "A gold ring engraved with your family's crest.",
  singleUse: false,
  defaultCost: 1000,
  slots: 1,
  itemType: ItemType.Accessory,
};
