import { DamageType } from "../../../enums/DamageType";
import { Trait } from "../../../models/traits";

export const SevereBurn: Trait = {
  name: "Severe burn",
  description:
    "Lose 1 {{damage:fire}}, {{damage:electric}}, {{damage:toxic}}, {{damage:slash}} and {{damage:force}} armour.",
  effects: [
    { armour: { damageType: DamageType.Fire, bonus: -1 } },
    { armour: { damageType: DamageType.Electric, bonus: -1 } },
    { armour: { damageType: DamageType.Toxic, bonus: -1 } },
    { armour: { damageType: DamageType.Slash, bonus: -1 } },
    { armour: { damageType: DamageType.Force, bonus: -1 } },
  ],
};
