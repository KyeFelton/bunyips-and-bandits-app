import { SenseType } from "../enums/SenseType";
import { Effect } from "./effect";
import { DamageType } from "../enums/DamageType";
import { SkillType } from "../enums/SkillType";
import { Locomotion } from "../enums/Locomotion";

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
      weapon: {
        bonus: 2,
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
        bonus: 1,
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
        bonus: 2,
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
        bonus: 3,
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

// Musician

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
        bonus: 3,
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
        bonus: 3,
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
        bonus: 3,
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
        bonus: 3,
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
        bonus: 3,
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
        bonus: 3,
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
        bonus: 2,
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
  description: "Your speed increases by 50%.",
  effects: [
    {
      speed: {
        locomotion: Locomotion.Walk,
        bonus: 1.5,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Swim,
        bonus: 1.5,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Climb,
        bonus: 1.5,
      },
    },
    {
      speed: {
        locomotion: Locomotion.Fly,
        bonus: 1.5,
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
};

// Mindseer
export const PsychicSense: Trait = {
  name: "Psychic sense",
  description:
    "You can sense the presence of other creatures and can communicate with them telepathically.",
  effects: [
    {
      sense: SenseType.Psychic,
    },
  ],
};

export const Unbending: Trait = {
  name: "Unbending",
  description: "Your morale increases by 50%.",
  effects: [
    {
      morale: {
        multiplier: 1.5,
      },
    },
  ],
};

export const Custodian: Trait = {
  name: "Custodian",
  description:
    "Whilst you have morale, you can redirect all psychic attacks targeted towards your allies to you instead.",
};

export const Psychologist: Trait = {
  name: "Psychologist",
  description: "Gain +5 bonus to psychology checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Psychology,
        bonus: 5,
      },
    },
  ],
};

export const Foresight: Trait = {
  name: "Foresight",
  description:
    "You intuitively sense the intentions of your enemies before they act. Gain +2 bonus to any check when evading an attack.",
};

// Hypnotist
export const Psychotic: Trait = {
  name: "Psychotic",
  description:
    "If you are a target of a psychic attack, the attacker loses 1d4 morale.",
};

export const Captivating: Trait = {
  name: "Captivating",
  description: "You gain +3 bonus to charisma checks.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        bonus: 3,
      },
    },
  ],
};

export const Unrelenting: Trait = {
  name: "Unrelenting",
  description:
    "Consecutive attacks against the same target with the same action cost half as much stamina.",
};

// Summoner
export const ParanormalSense: Trait = {
  name: "Paranormal sense",
  description:
    "You can sense whether a creature, object, or location has recently witnessed death. You can also sense whether a corpse is nearby.",
};

export const Medium: Trait = {
  name: "Medium",
  description:
    "You can touch a corpse to communicate with their spirit. The creature must have passed away in the last 100 years. Each minute costs 1 stamina.",
};

export const Undying: Trait = {
  name: "Undying",
  description:
    "Once per combat, upon being dropped to 0 health, you can act for one more round of combat before becoming incapacitated.",
};

export const SuperiorMedium: Trait = {
  name: "Superior medium",
  description:
    "You can commune with a dead spirit when you touch a sentimental object that they once possessed. You can also communicate with the spirits that once called your current location home. Each minute of communication costs 2 stamina.",
};

export const Blessed: Trait = {
  name: "Blessed",
  description:
    "You are blessed with protection from your ancestors. Gain +1 armour for all damage types.",
};

// Unassigned
export const ThickSkin: Trait = {
  name: "Thick skin",
  description: "Gain +2 armour for slash and force damage.",
  effects: [
    {
      armour: {
        damageType: DamageType.Slash,
        bonus: 2,
      },
    },
    {
      armour: {
        damageType: DamageType.Force,
        bonus: 2,
      },
    },
  ],
};

export const StrongWilled: Trait = {
  name: "Strong willed",
  description: "Gain +2 bonus to willpower.",
  effects: [
    {
      skill: {
        skillType: SkillType.Willpower,
        bonus: 2,
      },
    },
  ],
};
