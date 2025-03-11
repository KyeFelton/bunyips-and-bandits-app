import { SenseType } from "../enums/SenseType";
import { Effect } from "./effect";
import { DamageType } from "../enums/DamageType";
import { SkillType } from "../enums/SkillType";
import { MovementType } from "../enums/MovementType";

export type Trait = {
  name: string;
  description: string;
  effects?: Effect[];
};

// Weapon master

export const Lethal: Trait = {
  name: "Lethal",
  description: "Gain +2 weapon damage.",
  effects: [
    {
      weaponDamage: {
        static: 2,
      },
    },
  ],
};

export const Opportunist: Trait = {
  name: "Opportunist",
  description:
    "Once per round, upon an enemy moving through an adjacent square to you, you can perform an extra action to attack them.",
};

export const Vigilant: Trait = {
  name: "Vigilant",
  description: "Gain an extra evasion.",
  effects: [
    {
      evasions: {
        static: 1,
      },
    },
  ],
};

export const Instinctive: Trait = {
  name: "Instinctive",
  description: "You can perform an extra action on the first round of combat.",
};

export const Strong: Trait = {
  name: "Strong",
  description: "Gain +2 bonus to strength checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Strength,
        static: 2,
      },
    },
  ],
};

// Pyromaniac

export const InfraredSight: Trait = {
  name: "Infrared sight",
  description:
    "Your eyes become attuned to the various spectrums of light. You can now see heat emitted in your environment as infrared light.",
  effects: [
    {
      sense: SenseType.InfraredSight,
    },
  ],
};

export const FireResistant: Trait = {
  name: "Fire resistant",
  description:
    "Your body adapts to hot environments. Gain +3 armour for fire damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        static: 3,
      },
    },
  ],
};

export const FriendlyFire: Trait = {
  name: "Friendly fire",
  description:
    "If an ally is hit by one of your pyro attacks, they only receive half the normal damage and do not catch fire.",
};

export const Inflammable: Trait = {
  name: "Inflammable",
  description: "You cannot catch fire.",
};

export const Arsonist: Trait = {
  name: "Arsonist",
  description:
    "Youre fire power grows wild. Even if your opponent successfully evades your fire attack, they are still burned.",
};

// Sonomancer

export const TremorHearing: Trait = {
  name: "Tremor hearing",
  description:
    "Your feet become ultra sensitive, enabling you to feel minor vibrations in the ground. Your ears also adapt to the water, enabling you to sense vibrations clearly when underwater.",
  effects: [
    {
      sense: SenseType.TremorHearing,
    },
  ],
};

export const SharpEars: Trait = {
  name: "Sharp ears",
  description:
    "Your hearing sharpens, granting you +3 bonus to hearing checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Hearing,
        static: 3,
      },
    },
  ],
};

export const Bard: Trait = {
  name: "Bard",
  description:
    "You are a master of song and speech. People tend to find you more captivating and enjoy your presence. You gain +3 bonus to charisma checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        static: 3,
      },
    },
  ],
};

export const IronHearing: Trait = {
  name: "Iron hearing",
  description:
    "Your ears have toughened from your experience of crafting sounds. You cannot be deafened anymore.",
};

export const Rockstar: Trait = {
  name: "Rockstar",
  description: "You can perform pump up as a free extra action each turn.",
};

// Doctor

export const Healer: Trait = {
  name: "Healer",
  description:
    "When out of combat, you can spend time to heal your allies or yourself. For every minute you spend healing a person, they gain physique equal to your healing check and you lose 2 stamina.",
};

export const SharpNose: Trait = {
  name: "Sharp nose",
  description:
    "Your smell sharpens, allowing you to trace faint scents and track down other creatures. You gain +3 bonus to smell checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Smell,
        static: 3,
      },
    },
  ],
};

export const QuickRecovery: Trait = {
  name: "Quick recovery",
  description: "You can heal yourself whilst in combat.",
};

export const ToxicResistance: Trait = {
  name: "Toxic resistance",
  description:
    "Your body has grown resilient to the many types of poisons and acids. Gain 3 toxic armour.",
  effects: [
    {
      armour: {
        damageType: DamageType.Toxic,
        static: 3,
      },
    },
  ],
};

export const AcidicSkin: Trait = {
  name: "Acidic skin",
  description:
    "Acid oozes from your skin. Foes that touch your skin take 1d8 toxic damage.",
};

// Lightbender traits
export const SharpEyes: Trait = {
  name: "Sharp eyes",
  description: "Your sight sharpens, granting you +3 bonus to sight checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Sight,
        static: 3,
      },
    },
  ],
};

export const IronVision: Trait = {
  name: "Iron vision",
  description:
    "Your eyes have toughened from your experience of crafting light. You cannot be blinded anymore.",
};

export const Photosynthetic: Trait = {
  name: "Photosynthetic",
  description:
    "You can absorb sunlight. Lightbender actions cost 1 less stamina when performed in direct sunlight.",
};

export const RadiantAura: Trait = {
  name: "Radiant aura",
  description:
    "You radiate an aura from your body that is both mesmerising and bewildering. At the end of your turn, adjacent foes with sight sense must pass a moderate willpower check or become stunned.",
};

// Electrician traits
export const Conductive: Trait = {
  name: "Conductive",
  description:
    "If you are connected to your opponents by a body of water, your electric attacks costs 2 less stamina.",
};

export const ElectricResistance: Trait = {
  name: "Electric resistance",
  description: "Gain +3 armour for electric damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Electric,
        static: 3,
      },
    },
  ],
};

export const ThunderBuddy: Trait = {
  name: "Thunder buddy",
  description:
    "If an ally is hit by one of your electric attacks, they only receive half the normal damage and do not stun.",
};

export const LightningRod: Trait = {
  name: "Lightning rod",
  description:
    "You can direct all nearby electric attacks targeted towards your allies to you instead.",
};

export const StaticSkin: Trait = {
  name: "Static skin",
  description:
    "Electricity surges through your skin. Foes that touch your skin get zapped with 1d8 electric damage.",
};

// Stormcaller traits
export const Bellow: Trait = {
  name: "Bellow",
  description:
    "You can choose whether to smoother or aggravate existing fires when performing aerial attacks. If you smoother, then all burning statuses are removed. If you aggravate, then all targets become burned.",
};

export const Agile: Trait = {
  name: "Agile",
  description: "Gain +2 bonus to agility checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Agility,
        static: 2,
      },
    },
  ],
};

// export const WaterBreathing: Trait = {
//   name: "Water breathing",
//   description:
//     "You can extract oxygen from the water to create an air bubble around you and allow you to breathe underwater.",
// };

export const Boomerang: Trait = {
  name: "Boomerang",
  description:
    "You can recall back a thrown object as an extra action on your turn.",
};

export const Swift: Trait = {
  name: "Swift",
  // Fix this
  description: "Your speed increases by 50%.",
  effects: [
    {
      speed: {
        movementType: MovementType.Walk,
        static: 1,
      },
    },
  ],
};

export const WindShield: Trait = {
  name: "Wind shield",
  description:
    "Whilst in combat, you surround yourself with a torrent of wind. You gain +1 armour for all damage types.",
  effects: [
    {
      armour: {
        damageType: DamageType.Fire,
        static: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Electric,
        static: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Toxic,
        static: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Slash,
        static: 1,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        static: 1,
      },
    },
  ],
};

// Unassigned
export const ThickSkin: Trait = {
  name: "Thick skin",
  description: "Gain +2 armour for slash and force damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Slash,
        static: 2,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        static: 2,
      },
    },
  ],
};
