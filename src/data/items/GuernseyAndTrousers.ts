import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const GuernseyAndTrousers: Item = {
  name: "Guernsey and trousers",
  description: "A thick knitted woollen pullover with sailcloth trousers, designed to withstand cold and wet conditions at sea.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Clothing,
};
