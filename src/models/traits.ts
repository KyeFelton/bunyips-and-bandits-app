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

export const Strong: Trait = {
  name: "Strong",
  description: "Increase your weapons damage by 2.",
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
    "Once per round, upon an enemy moving past you, you can perform an extra action to attack.",
};

export const Vigilant: Trait = {
  name: "Vigilant",
  description: "Increase your evasion count by 1.",
  effects: [
    {
      evasions: {
        static: 1,
      },
    },
  ],
};

export const ThickSkin: Trait = {
  name: "Thick Skin",
  description: "Increase your armour for slash and force damage by 1.",
  effects: [
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

export const Instinctive: Trait = {
  name: "Instinctive",
  description: "You can perform an extra action on the first round of combat.",
};

// Pyromaniac

export const InfraredSight: Trait = {
  name: "Infrared Sight",
  description:
    "Your eyes become attuned to the various spectrums of light. You can now see heat emitted in your environment as infrared light.",
  effects: [
    {
      sense: SenseType.InfraredSight,
    },
  ],
};

export const FireResistant: Trait = {
  name: "Fire Resistant",
  description:
    "Your body adapts to hot environments. Gain 3 armour for fire damage.",
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
  name: "Friendly Fire",
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
    "Youre fire power grows wild. You have advantage on all attacks that deal fire damage.",
};

// Sonomancer

export const TremorHearing: Trait = {
  name: "Tremor hearing",
  description:
    "Your feet become ultra sensitive, enabling you to feel minor vibrations in the ground. Your ears also adapt to the water, enabling you to sense vibrations clearly when underwater. You gain +4 bonus to hearing checks",
  effects: [
    {
      sense: SenseType.TremorHearing,
    },
    {
      sense: SenseType.Hearing,
    },
    {
      skill: {
        skillType: SkillType.Hearing,
        static: 4,
      },
    },
  ],
};

export const Bard: Trait = {
  name: "Bard",
  description:
    "You are a master of song and speech. People tend to find you more captivating and enjoy your presence.",
  effects: [
    {
      skill: {
        skillType: SkillType.Charisma,
        static: 2,
      },
    },
  ],
};

export const Swift: Trait = {
  name: "Swift",
  description: "Your speed increases and you can leap extraordinary distances.",
  effects: [
    {
      speed: {
        movementType: MovementType.Walk,
        static: 4,
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
  description: "You can perform pump up as an extra action each turn.",
};

// Doctor

export const SharpSmell: Trait = {
  name: "Sharp Smell",
  description:
    "Your smell sharpens, allowing you to trace faint scents and track down other creatures. You gain +4 bonus to smell checks.",
  effects: [
    {
      sense: SenseType.Smell,
    },
    {
      skill: {
        skillType: SkillType.Smell,
        static: 4,
      },
    },
  ],
};

export const ToxicResistance: Trait = {
  name: "Toxic Resistance",
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

export const SelfRegenerative: Trait = {
  name: "Self Regenerative",
  description:
    "Double the amount of health restored when you mend, heal or cure yourself.",
};

export const Caretaker: Trait = {
  name: "Caretaker",
  description:
    "You and your allies roll an extra level die when regaining health after a long rest.",
};

export const AcidicSkin: Trait = {
  name: "Acidic Skin",
  description:
    "Acid oozes from your skin. Foes that touch your skin take 1d8 toxic damage.",
};

// Lightbender traits
export const IronVision: Trait = {
  name: "Iron Vision",
  description: "Your eyes have toughened from your experience of crafting light. You cannot be blinded anymore.",
};

export const Photosynthetic: Trait = {
  name: "Photosynthetic",
  description: "You can absorb sunlight. Lightbender actions cost 1 less stamina when performed in direct sunlight.",
};

export const RadiantAura: Trait = {
  name: "Radiant Aura",
  description: "You radiate an aura from your body that is both mesmerising and bewildering. Adjacent foes that rely on sight are stunned at the end of your turn.",
};