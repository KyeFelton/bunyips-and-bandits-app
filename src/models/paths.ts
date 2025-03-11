import { SkillType } from "../enums/SkillType";
import {
  Action,
  Plough,
  Decimate,
  Douse,
  Extinguish,
  Fireworks,
  Flamethrower,
  FlameTorch,
  HeatWave,
  Ignite,
  Incinerate,
  Inferno,
  Insulator,
  Sweep,
  Swipe,
  SonicCharge,
  Distort,
  ThunderPunch,
  Shriek,
  PumpUp,
  Shockwave,
  Silence,
  Mimic,
  SonicBoom,
  Pulverize,
  PoisonBreath,
  Stench,
  Antidote,
  AcidBomb,
  ToxicPlume,
  Odourless,
  VenomSting,
  DeathCloud,
  Beacon,
  HeatRay,
  BlindingFlash,
  MirrorDome,
  SearingRadiance,
  Disguise,
  Apparition,
  Invisibility,
  Hyperbeam,
  SolarFlare,
  Attract,
  Catapult,
  Discharge,
  ElectricCharge,
  Electrocute,
  Fly,
  Gust,
  Hurl,
  Hurricane,
  Impedance,
  Levitate,
  Lightning,
  Rifle,
  Shock,
  Taser,
  Tornado,
  Torrent,
  WindBarrier,
  Zap,
  Guard,
  Resuscitate,
  Paralysis,
  AirBarrier,
  Restrain,
} from "./actions";
import {
  AcidicSkin,
  Arsonist,
  Bard,
  FireResistant,
  FriendlyFire,
  Inflammable,
  InfraredSight,
  Instinctive,
  IronHearing,
  Opportunist,
  Rockstar,
  SharpNose,
  Lethal,
  Swift,
  ToxicResistance,
  Trait,
  TremorHearing,
  Vigilant,
  IronVision,
  Photosynthetic,
  RadiantAura,
  Bellow,
  Conductive,
  LightningRod,
  Boomerang,
  StaticSkin,
  ThunderBuddy,
  Healer,
  QuickRecovery,
  SharpEars,
  SharpEyes,
  ElectricResistance,
  Agile,
  Strong,
  WindShield,
} from "./traits";

export type Path = {
  name: string;
  description: string;
  skillTypes: SkillType[];
  unlockables: {
    level: number;
    actions: Action[];
    traits: Trait[];
  }[];
};

export type SelectedPath = Path & {
  level: number;
};

export const WeaponMaster: Path = {
  name: "Weapon Master",
  skillTypes: [SkillType.Martial],
  description:
    "Weapon masters are trained warriors who excel in melee combat. They have learnt the techniques of martial arts to perfect their combat, and studied morphing to push their physical capabilities to the limit.",
  unlockables: [
    {
      level: 1,
      actions: [Swipe],
      traits: [Strong],
    },
    {
      level: 2,
      actions: [Plough],
      traits: [Opportunist],
    },
    {
      level: 3,
      actions: [Guard],
      traits: [Lethal],
    },
    {
      level: 4,
      actions: [Decimate],
      traits: [Vigilant],
    },
    {
      level: 5,
      actions: [Sweep],
      traits: [Instinctive],
    },
  ],
};

export const Pyromaniac: Path = {
  name: "Pyromaniac",
  skillTypes: [SkillType.Pyro],
  description:
    "Pyromaniacs are the masters of controlled chaos, using flames to disrupt and destroy their enemies. This specialty uses a combination of sorcery and morphing to produce fire at will.",
  unlockables: [
    {
      level: 1,
      actions: [Ignite, FlameTorch],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [Douse, Flamethrower],
      traits: [FriendlyFire],
    },
    {
      level: 3,
      actions: [HeatWave, Extinguish],
      traits: [FireResistant],
    },
    {
      level: 4,
      actions: [Insulator, Fireworks],
      traits: [Inflammable],
    },
    {
      level: 5,
      actions: [Inferno, Incinerate],
      traits: [Arsonist],
    },
  ],
};

export const Sonomancer: Path = {
  name: "Sonomancer",
  skillTypes: [SkillType.Sonic],
  description:
    "Sonomancers are attuned to the rhythms and sounds of their environment. They can weave soundwaves to conjure enchantments and blast their enemies.",
  unlockables: [
    {
      level: 1,
      actions: [Distort, Shriek],
      traits: [TremorHearing],
    },
    {
      level: 2,
      actions: [ThunderPunch, PumpUp],
      traits: [SharpEars],
    },
    {
      level: 3,
      actions: [Shockwave, Mimic],
      traits: [Bard],
    },
    {
      level: 4,
      actions: [Silence, SonicCharge],
      traits: [IronHearing],
    },
    {
      level: 5,
      actions: [SonicBoom, Pulverize],
      traits: [Rockstar],
    },
  ],
};

export const Doctor: Path = {
  name: "Doctor",
  skillTypes: [SkillType.Healing, SkillType.Toxic],
  description:
    "Through years of study in morphing, doctors have mastered the delicate balance between healing and harm. Their knowledge of poisons allows them to weaken powerful enemies, whilst their expertise in healing makes them indispensable during the toughest times.",
  unlockables: [
    {
      level: 1,
      actions: [PoisonBreath, Stench],
      traits: [Healer],
    },
    {
      level: 2,
      actions: [VenomSting, Resuscitate],
      traits: [SharpNose],
    },
    {
      level: 3,
      actions: [Antidote, ToxicPlume],
      traits: [QuickRecovery],
    },
    {
      level: 4,
      actions: [Odourless, AcidBomb],
      traits: [ToxicResistance],
    },
    {
      level: 5,
      actions: [Paralysis, DeathCloud],
      traits: [AcidicSkin],
    },
  ],
};

export const Lightbender: Path = {
  name: "Lightbender",
  skillTypes: [SkillType.Radiant],
  description:
    "Lightbenders are the artisans of light. Whether crafting dazzling illusions or blinding adversaries with radiant bursts, lightbenders are a versatile ally to any team.",
  unlockables: [
    {
      level: 1,
      actions: [Beacon, Disguise],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [HeatRay, BlindingFlash],
      traits: [SharpEyes],
    },
    {
      level: 3,
      actions: [SearingRadiance, Apparition],
      traits: [Photosynthetic],
    },
    {
      level: 4,
      actions: [Invisibility, MirrorDome],
      traits: [IronVision],
    },
    {
      level: 5,
      actions: [Hyperbeam, SolarFlare],
      traits: [RadiantAura],
    },
  ],
};

export const Electrician: Path = {
  name: "Electrician",
  skillTypes: [SkillType.Electric],
  description:
    "Masters of electricity, electrcians can manipulate electrical and magnetic forces to devastating effect. Their powers range from subtle magnetic control to unleashing deadly bolts of lightning.",
  unlockables: [
    {
      level: 1,
      actions: [Taser, Shock],
      traits: [Conductive],
    },
    {
      level: 2,
      actions: [Impedance, ElectricCharge],
      traits: [ThunderBuddy],
    },
    {
      level: 3,
      actions: [Attract, Zap],
      traits: [ElectricResistance],
    },
    {
      level: 4,
      actions: [Levitate, Electrocute],
      traits: [LightningRod],
    },
    {
      level: 5,
      actions: [Lightning, Discharge],
      traits: [StaticSkin],
    },
  ],
};

export const Stormcaller: Path = {
  name: "Stormcaller",
  skillTypes: [SkillType.Kinetic],
  description:
    "Stormcallers harness the raw power of the elements to control the battlefield. They excel at hurling objects and creatures through the air and dealing devastating damage.",
  unlockables: [
    {
      level: 1,
      actions: [Gust, Hurl],
      traits: [Agile],
    },
    {
      level: 2,
      actions: [Torrent, Restrain],
      traits: [Bellow],
    },
    {
      level: 3,
      actions: [AirBarrier, Rifle],
      traits: [Swift],
    },
    {
      level: 4,
      actions: [Fly, Catapult],
      traits: [Boomerang],
    },
    {
      level: 5,
      actions: [Tornado, Hurricane],
      traits: [WindShield],
    },
  ],
};
