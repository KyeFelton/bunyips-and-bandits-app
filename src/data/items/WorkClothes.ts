import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { WearType } from "../../enums/WearType";

export const WorkClothes: Item = {
  name: "Work clothes",
  description:
    "Sturdy, hard-wearing clothes built to withstand a day of hard labour.",
  singleUse: false,
  slots: 1,
  wearType: WearType.Clothes,
  itemType: ItemType.Clothing,
};
