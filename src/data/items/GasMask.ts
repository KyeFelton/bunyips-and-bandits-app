import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";

export const GasMask: Item = {
  name: "Gas mask",
  description: "You gain +3 armour for toxic damage and become anosmic.",
  effects: [
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 3,
      },
    },
  ],
  singleUse: false,
  wearType: WearType.Accessory,
  slots: 1,
  defaultCost: 500,
};
