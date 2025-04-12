import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

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
  weight: 1.0,
  defaultCost: 500,
};
