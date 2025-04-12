import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";

export const WaterHammerOfTytos: Item = {
  name: "Water Hammer of Tytos",
  description:
    "The water hammer is believed to be the weapon gifted by Eva to Tytos to fight the Night Dragon. The hammer is made of an unknown, marine blue metal, and decorated with symbols of water. The weapon deals 10 force damage, and the wielder gains +1 armour for all damage types.",
  effects: [
    {
      weapon: {
        bonus: 10,
        damageType: DamageType.Force,
      },
    },
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Electric,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Toxic,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 1,
      },
    },
  ],
  singleUse: false,
  weight: 1,
};
