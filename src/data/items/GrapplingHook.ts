import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const GrapplingHook: Item = {
  name: "Grappling hook",
  description: "Rope with a three-pronged curved hook. Attaches onto ledges for climbing or hauling.",
  singleUse: false,
  slots: 1,
  defaultCost: 25,
  itemType: ItemType.Gear,
};
