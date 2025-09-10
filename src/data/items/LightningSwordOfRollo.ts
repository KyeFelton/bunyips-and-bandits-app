import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const LightningSwordOfRollo: Item = {
  name: "Lightning Sword of Rollo",
  description:
    "The Lightning Sword is believed to be the weapon gifted by Eva to Rollo to fight the Night Dragon. The sword is made of an unknown, electric blue metal, and decorated with symbols of lightning. The weapons deals 5 slash damage. On the first attack of each combat, this sword deals an addition +5 electric damage to its target.",
  effects: [
    {
      weapon: {
        bonus: 5,
        damageType: DamageType.Slash,
      },
    },
  ],
  singleUse: false,
  weight: 1,
};
