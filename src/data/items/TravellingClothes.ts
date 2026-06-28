import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { WearType } from "../../enums/WearType";

export const TravellingClothes: Item = {
  name: "Travelling clothes",
  description: "Weathered but practical clothes suited to life on the road.",
  singleUse: false,
  slots: 0,
  wearType: WearType.Clothes,
  itemType: ItemType.Clothing,
};
