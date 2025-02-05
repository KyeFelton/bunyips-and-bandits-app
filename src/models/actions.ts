import { AreaOfEffect } from "../enums/AreaOfEffect";
import { Range } from "../enums/Range";
import { SkillType } from "../enums/SkillType";

export type Action = {
  name: string;
  effect: string;
  skillType: SkillType;
  range: Range;
  areaOfEffect: AreaOfEffect;
  staminaCost: number | "variable";
};

// Armed species

export const Strike: Action = {
  name: "Strike",
  effect: "You strike your opponent and deal your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Throw: Action = {
  name: "Throw",
  effect:
    "You throw your weapon at your target. If you hit, they take your weapon’s damage. Whether hit or miss, you are no longer wielding your weapon.",
  skillType: SkillType.Throw,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

// Weapon master

export const Swipe: Action = {
  name: "Swipe",
  effect:
    "You attack two targets who are next to each other. They take your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.MultipleTargets,
  staminaCost: 2,
};

export const Plough: Action = {
  name: "Plough",
  effect:
    "Move up to three times your speed towards your target then deal your weapon’s damage. If the creature is equal size to you or smaller, they are stunned. If they are smaller than you, they are also knocked back 2m.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};

export const Sweep: Action = {
  name: "Sweep",
  effect:
    "You attack all targets who are next to you. They take your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.MultipleTargets,
  staminaCost: 4,
};

export const Decimate: Action = {
  name: "Decimate",
  effect:
    "You focus all your attention to smashing your target’s weak spot. On hit, deal double your weapon’s damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};

// Pyromaniac

export const Ignite: Action = {
  name: "Ignite",
  effect:
    "A spark of energy emits from your body towards your opponent, causing them to catch fire.",
  skillType: SkillType.Pyro,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Douse: Action = {
  name: "Douse",
  effect:
    "You dispel the heat of a nearby fire causing it to smother immediately. The target is no longer burning.",
  skillType: SkillType.Pyro,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};

export const FlameTorch: Action = {
  name: "Flame torch",
  effect:
    "You produce a small flame that illuminates your surroundings. The torch lasts until your next turn.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 1,
};

export const HeatBlast: Action = {
  name: "Heat blast",
  effect:
    "A blast of heat bursts from your body. Targets take 5 fire damage and catch fire.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 4,
};

export const Fireworks: Action = {
  name: "Fireworks",
  effect:
    "Fireworks shoot out in all directions to create chaos. Targets are stunned.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};

export const Insulator: Action = {
  name: "Insulator",
  effect:
    "You focus your attention towards countering the spells of your foes. Targets of your choosing are protected with 5 fire armour.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};

export const Fireball: Action = {
  name: "Fireball",
  effect:
    "You throw a ball of flaming liquid at your target that explodes with fire on impact. Your target takes 10 fire damage and catches fire.",
  skillType: SkillType.Pyro,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};

export const Extinguish: Action = {
  name: "Extinguish",
  effect:
    "You dispel the heat of nearby fires causing them to smother immediately. Targets of your choosing are no longer burning.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 2,
};

export const Flamethrower: Action = {
  name: "Flamethrower",
  effect:
    "Fire erupts from your body, engulfing your targets in flames. Every target takes 10 fire damage and catches fire.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 4,
};

export const HeatWave: Action = {
  name: "Heat wave",
  effect:
    "Heat expelled from your body rapidly rises the air temperature around you for the duration of the round. All creatures in the area take 5 fire damage.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 2,
};

export const Inferno: Action = {
  name: "Inferno",
  effect:
    "You unleash a sudden explosion of fire that leads devastation in its wake. All targets around you take 15 fire damage, catch fire, and become stunned and blinded.",
  skillType: SkillType.Pyro,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 8,
};

export const Incinerate: Action = {
  name: "Incinerate",
  effect:
    "You destroy your target with fire. Your target takes 25 fire damage and catches fire.",
  skillType: SkillType.Pyro,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};

// Sonomancer

export const Tremor: Action = {
  name: "Tremor",
  effect:
    "You create a powerful vibration that causes your target to tremor. The target is stunned.",
  skillType: SkillType.Sonic,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Charge: Action = {
  name: "Charge",
  effect:
    "You take an action to build up energy and increase the power of your next attack. On your next turn, increase any force damage dealt to a target by 5.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Distort: Action = {
  name: "Distort",
  effect:
    "You manipulate the noises of your target to make them sound different. The illusion lasts until your next turn.",
  skillType: SkillType.Sonic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const ThunderPunch: Action = {
  name: "Thunder punch",
  effect:
    "You punch your foe with devastating force. They take 5 force damage. If they are medium size or smaller, they are knocked back 5m.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Shriek: Action = {
  name: "Shriek",
  effect:
    "You make an earsplitting sound that stuns, deafens and reduces sanity by 2 for targets with hearing sense.",
  skillType: SkillType.Sonic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};

export const PumpUp: Action = {
  name: "Pump up",
  effect: "You play a song that empowers your allies.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 2,
};

export const Shatter: Action = {
  name: "Shatter",
  effect:
    "Your target begins to shatter as you emit powerful pulses. They take 10 force damage.",
  skillType: SkillType.Sonic,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};

export const Shockwave: Action = {
  name: "Shockwave",
  effect:
    "A thunderous shockwave erupts from a point of your choosing. They take 5 force damage and become deafened. If performed inside an enclosed room or chamber, then deal an additional 5 force damage.",
  skillType: SkillType.Sonic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 3,
};

export const Silence: Action = {
  name: "Silence",
  effect:
    "You soften all vibrations around you, making you and adjacent allies silent.",
  skillType: SkillType.Sonic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 1,
};

export const Mimic: Action = {
  name: "Mimic",
  effect:
    "You perfectly emulate the sounds and voices of a creature or object. The illusion lasts until your next turn.",
  skillType: SkillType.Sonic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const SonicBoom: Action = {
  name: "Sonic boom",
  effect:
    "You blast your targets with a sonic boom. They take 10 force damage and are deafened. If they are medium size or smaller, they are thrown back 5m. If performed inside an enclosed room or chamber, then deal an additional 5 force damage",
  skillType: SkillType.Sonic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 5,
};

export const Pulverize: Action = {
  name: "Pulverize",
  effect:
    "You pulverise your opponent with powerful shockwaves. Deal 25 force damage.",
  skillType: SkillType.Sonic,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};

// Doctor

export const Mend: Action = {
  name: "Mend",
  effect: "You mend the wounds of your ally. They gain 3 health.",
  skillType: SkillType.Healing,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const PoisonBreath: Action = {
  name: "Poison breath",
  effect:
    "You breathe a mist of poisonous gas towards your targets. They take 5 toxic damage.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 1,
};

export const Stench: Action = {
  name: "Stench",
  effect:
    "A horrendous stench radiates from your body. Nearby targets become asnamic.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 1,
};

export const PoisonJab: Action = {
  name: "Poison jab",
  effect:
    "You stab your target with a poisoned barb. They take both 6 toxic and 4 slash damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Heal: Action = {
  name: "Heal",
  effect: "You mend the wounds of your ally. They gain 15 health.",
  skillType: SkillType.Healing,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 6,
};

export const Antidote: Action = {
  name: "Antidote",
  effect:
    "You focus your attention towards countering the spells of your foes. Targets of your choosing are protected with 5 toxic armour.",
  skillType: SkillType.Healing,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};

export const AcidBomb: Action = {
  name: "Acid bomb",
  effect:
    "You hurl a ball of corrosive acid towards your target. They take 15 toxic damage.",
  skillType: SkillType.Throw,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};

export const ToxicPlume: Action = {
  name: "Toxic plume",
  effect:
    "You expel noxious gas from your body. Nearby targets take 10 toxic damage and become asnamic.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 4,
};

export const Cure: Action = {
  name: "Cure",
  effect:
    "You cure the wounds of your ally. For every stamina you choose to expend on the action, the target restores 2 health.",
  skillType: SkillType.Healing,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: "variable",
};

export const Odourless: Action = {
  name: "Odourless",
  effect:
    "You mask your scent from detection by other creatures to make you odourless.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 0,
};

export const VenomSting: Action = {
  name: "Venom sting",
  effect:
    "Your target is injected with a deadly dose of debilitating venom. They take 20 toxic damage, 4 slash damage and are stunned.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};

export const DeathCloud: Action = {
  name: "Death cloud",
  effect:
    "The air around you is overwhelmed with a toxic haze. Targets take 15 toxic damage and are stunned.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 4,
};
