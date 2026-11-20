import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";

export const FeatheredHat: Item = {
  name: "Feathered hat",
  description: "A fashionable hat decorated with feathers, ribbons and decorative trimmings.",
  singleUse: false,
  slots: 1,
  itemType: ItemType.Accessory,
};
