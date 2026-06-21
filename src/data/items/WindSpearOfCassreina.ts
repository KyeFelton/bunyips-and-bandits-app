import { Item } from "../../models/items";
import { DamageType } from "../../enums/DamageType";
import { Locomotion } from "../../enums/Locomotion";

export const WindSpearOfCassreina: Item = {
  name: "Wind Spear of Cassreina",
  description:
    "The wind spear is believed to be the weapon gifted by Eva to Cassreina to fight the Night Dragon. The spear is made of an unknown, silver metal, and decorated with symbols of wind.",
  equippedEffects: [
    {
      weapon: {
        bonus: 5,
        damageType: DamageType.Slash,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Run,
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
    {
      custom:
        "Creatures that are 2m away from you are considered adjacent when attacking with this weapon.",
    },
  ],
  singleUse: false,
  slots: 2,
};
