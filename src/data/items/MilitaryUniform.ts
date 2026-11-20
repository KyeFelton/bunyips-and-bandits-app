import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const MilitaryUniform: Item = {
  name: "Military uniform",
  description: "A military outfit consisting of a uniform jacket, trousers and boots, decorated with the insignia of your allegiance.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
