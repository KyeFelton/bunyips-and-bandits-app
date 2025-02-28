import { SkillType } from "../enums/SkillType";
import {
  Action,
  Plough,
  Decimate,
  Douse,
  Extinguish,
  Fireball,
  Fireworks,
  Flamethrower,
  FlameTorch,
  HeatBlast,
  HeatWave,
  Ignite,
  Incinerate,
  Inferno,
  Insulator,
  Sweep,
  Swipe,
  Tremor,
  Charge,
  Distort,
  ThunderPunch,
  Shriek,
  PumpUp,
  Shatter,
  Shockwave,
  Silence,
  Mimic,
  SonicBoom,
  Pulverize,
  Mend,
  PoisonBreath,
  Stench,
  PoisonJab,
  Heal,
  Antidote,
  AcidBomb,
  ToxicPlume,
  Odourless,
  Cure,
  VenomSting,
  DeathCloud,
  Beacon,
  Mirage,
  HeatRay,
  DazzlingLights,
  BlindingFlash,
  MirrorDome,
  SearingRadiance,
  Disguise,
  Apparition,
  Invisibility,
  Hyperbeam,
  SolarFlare,
  AirSlash,
  Attract,
  Catapult,
  Chain,
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
  MagnetiseArena,
  Propel,
  Rifle,
  Shock,
  Taser,
  Tornado,
  Torrent,
  WindBarrier,
  WindShield,
  Zap,
} from "./actions";
import {
  AcidicSkin,
  Arsonist,
  Bard,
  Caretaker,
  FireResistant,
  FriendlyFire,
  Inflammable,
  InfraredSight,
  Instinctive,
  IronHearing,
  Opportunist,
  Rockstar,
  SelfRegenerative,
  SharpSmell,
  Strong,
  Swift,
  ThickSkin,
  ToxicResistance,
  Trait,
  TremorHearing,
  Vigilant,
  IronVision,
  Photosynthetic,
  RadiantAura,
  Bellow,
  ElectricResistanceI,
  ElectricResistanceII,
  Hydrophile,
  LightningRod,
  Rebounder,
  StaticSkin,
  ThunderBuddy,
  WaterBreathing,
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
      actions: [],
      traits: [Strong, Vigilant],
    },
    {
      level: 2,
      actions: [Swipe],
      traits: [Opportunist],
    },
    {
      level: 3,
      actions: [Plough],
      traits: [Strong, Vigilant],
    },
    {
      level: 4,
      actions: [Sweep],
      traits: [ThickSkin],
    },
    {
      level: 5,
      actions: [Decimate],
      traits: [Instinctive],
    },
  ],
};

export const Pyromaniac: Path = {
  name: "Pyromaniac",
  skillTypes: [SkillType.Pyro],
  description:
    "Pyromaniacs are the masters of controlled chaos, using flames to dazzle, disrupt, and destroy their enemies. This specialty uses a combination of sorcery and morphing to produce fire at will.",
  unlockables: [
    {
      level: 1,
      actions: [Ignite, Douse, FlameTorch],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [HeatBlast, Fireworks, Insulator],
      traits: [FireResistant],
    },
    {
      level: 3,
      actions: [Fireball, Extinguish],
      traits: [FriendlyFire],
    },
    {
      level: 4,
      actions: [Flamethrower, HeatWave],
      traits: [Inflammable, FireResistant],
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
    "Sonomancers are attuned to the rhythms and sounds of their environment. They can weave soundwaves to conjure enchantments and pulverise enemies.",
  unlockables: [
    {
      level: 1,
      actions: [Tremor, Charge, Distort],
      traits: [TremorHearing],
    },
    {
      level: 2,
      actions: [ThunderPunch, Shriek, PumpUp],
      traits: [Bard],
    },
    {
      level: 3,
      actions: [Shatter, Shockwave],
      traits: [Swift],
    },
    {
      level: 4,
      actions: [Silence, Mimic],
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
  skillTypes: [SkillType.Toxic, SkillType.Healing],
  description:
    "Through years of study in morphing, Doctors have mastered the delicate balance between healing and harm. Their knowledge of poisons allows them to weaken powerful enemies, whilst their expertise in healing makes them indispensable during the toughest times.",
  unlockables: [
    {
      level: 1,
      actions: [Mend, PoisonBreath, Stench],
      traits: [SharpSmell],
    },
    {
      level: 2,
      actions: [PoisonJab, Heal, Antidote],
      traits: [Caretaker],
    },
    {
      level: 3,
      actions: [AcidBomb, ToxicPlume],
      traits: [ToxicResistance],
    },
    {
      level: 4,
      actions: [Cure, Odourless],
      traits: [SelfRegenerative],
    },
    {
      level: 5,
      actions: [VenomSting, DeathCloud],
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
      actions: [Beacon, Mirage, HeatRay],
      traits: [InfraredSight],
    },
    {
      level: 2,
      actions: [DazzlingLights, BlindingFlash, MirrorDome],
      traits: [FireResistant],
    },
    {
      level: 3,
      actions: [SearingRadiance, Disguise],
      traits: [Photosynthetic],
    },
    {
      level: 4,
      actions: [Apparition, Invisibility],
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
    "Masters of electricity, these sorcerers can manipulate electrical and magnetic forces to devastating effect. Their powers range from subtle magnetic control to unleashing devastating bolts of lightning.",
  unlockables: [
    {
      level: 1,
      actions: [Taser, ElectricCharge, Chain],
      traits: [Hydrophile],
    },
    {
      level: 2,
      actions: [Shock, Impedance, Levitate],
      traits: [ElectricResistanceI],
    },
    {
      level: 3,
      actions: [Attract, Zap],
      traits: [ThunderBuddy],
    },
    {
      level: 4,
      actions: [MagnetiseArena, Electrocute],
      traits: [LightningRod, ElectricResistanceII],
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
    "Masters of wind and weather, Stormcallers harness the raw power of the elements to control the battlefield. They excel at manipulating objects and creatures through the air, creating powerful defensive barriers, and unleashing devastating storms.",
  unlockables: [
    {
      level: 1,
      actions: [Gust, Hurl, Propel],
      traits: [Bellow],
    },
    {
      level: 2,
      actions: [WindBarrier, AirSlash],
      traits: [Swift],
    },
    {
      level: 3,
      actions: [Torrent, Rifle],
      traits: [ThunderBuddy],
    },
    {
      level: 4,
      actions: [Fly, WindShield, Catapult],
      traits: [WaterBreathing],
    },
    {
      level: 5,
      actions: [Tornado, Hurricane],
      traits: [Rebounder],
    },
  ],
};
