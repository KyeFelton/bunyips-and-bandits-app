import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const Didgeridoo: Item = {
  name: "Didgeridoo",
  description: "A long wooden wind instrument producing a deep resonant drone.",
  singleUse: false,
  slots: 2,
  itemType: ItemType.Gear,
};
