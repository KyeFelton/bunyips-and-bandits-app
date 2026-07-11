import { DamageType } from "../../enums/DamageType";
import { Trait } from "../../models/traits";

export const WindShield: Trait = {
  name: "Wind shield",
  description:
    "Whilst in combat, you surround yourself with a torrent of wind. Gain 1 {{damage:fire}}, {{damage:slash}}, and {{damage:force}} armour.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
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
};
