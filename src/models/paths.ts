import { SkillType } from "src/enums/SkillType";
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
  description: "",
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
