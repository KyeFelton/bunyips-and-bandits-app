import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";
import { ItemType } from "../../enums/ItemType";
import { SenseType } from "../../enums/SenseType";

export const GasMask: Item = {
  name: "Gas mask",
  equippedEffects: [
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 2,
      },
    },
    {
      sense: {
        lose: SenseType.Smell,
      },
    },
  ],
  singleUse: false,
  slots: 1,
  defaultCost: 500,
  itemType: ItemType.Accessory,
};
