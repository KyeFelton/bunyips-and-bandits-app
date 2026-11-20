import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FirstAidKit: Item = {
  name: "First aid kit",
  description: "A kit full of bandages, needles, thread and ointments. Can be used once per day on yourself and allies to restore 1 {{health:body}} upon passing a medium {{skill:lore}} check.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Tool,
};
