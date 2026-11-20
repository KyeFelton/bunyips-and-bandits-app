import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const TailcoatAndBreeches: Item = {
  name: "Tailcoat and breeches",
  description: "A formal coat with a short front and long tails at the back worn by wealthy gentlemen.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
