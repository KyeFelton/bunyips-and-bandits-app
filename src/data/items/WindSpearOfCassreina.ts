import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";

export const WindSpearOfCassreina: Item = {
  name: "Wind Spear of Cassreina",
  description:
    "The wind spear is believed to be the weapon gifted by Eva to Cassreina to fight the Night Dragon. The spear is made of an unknown, silver metal, and decorated with symbols of wind. The weapon deals 5 slash damage, and the wielder gains +2 speed. Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
  effects: [
    {
      weapon: {
        bonus: 5,
        damageType: DamageType.Slash,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Walk,
        bonus: 2,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Swim,
        bonus: 2,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Climb,
        bonus: 2,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Fly,
        bonus: 2,
      },
    },
  ],
  singleUse: false,
  weight: 1,
};
