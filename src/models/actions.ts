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
  effect: "You strike your opponent and deal your weapon's damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Throw: Action = {
  name: "Throw",
  effect:
    "You throw your weapon at your target. If you hit, they take your weapon's damage. Whether hit or miss, you are no longer wielding your weapon.",
  skillType: SkillType.Throw,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

// Weapon master

export const Swipe: Action = {
  name: "Swipe",
  effect:
    "You attack two targets who are next to each other. They take your weapon's damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.MultipleTargets,
  staminaCost: 2,
};

export const Plough: Action = {
  name: "Plough",
  effect:
    "Move up to three times your speed towards your target then deal your weapon's damage. If the creature is equal size to you or smaller, they are stunned. If they are smaller than you, they are also knocked back 2m.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};

export const Sweep: Action = {
  name: "Sweep",
  effect:
    "You attack all targets who are next to you. They take your weapon's damage.",
  skillType: SkillType.Martial,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.MultipleTargets,
  staminaCost: 4,
};

export const Decimate: Action = {
  name: "Decimate",
  effect:
    "You focus all your attention to smashing your target's weak spot. On hit, deal double your weapon's damage.",
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
  skillType: SkillType.Toxic,
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
  skillType: SkillType.Toxic,
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
  skillType: SkillType.Toxic,
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

// Lightbender actions
export const Beacon: Action = {
  name: "Beacon",
  effect: "You illuminate your surroundings with light.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 1,
};

export const Mirage: Action = {
  name: "Mirage",
  effect:
    "You manipulate the light reflected off your target to slightly alter their appearance. The illusion lasts until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const HeatRay: Action = {
  name: "Heat ray",
  effect:
    "You cast a beam of infrared light at your target. Your target takes 5 fire damage.",
  skillType: SkillType.Radiant,
  range: Range.Distant,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const DazzlingLights: Action = {
  name: "Dazzling lights",
  effect: "Dazzling lights flash to stun targets with sight sense.",
  skillType: SkillType.Radiant,
  range: Range.Distant,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 1,
};

export const BlindingFlash: Action = {
  name: "Blinding flash",
  effect:
    "You emit a bright light that scars the eyes of your target. Targets with sight sense are blinded, stunned and lose 1 sanity.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};

export const MirrorDome: Action = {
  name: "Mirror dome",
  effect:
    "You manifest an intangible dome that reflects light. Creatures both inside and outside the dome see a mirror. However, if there is no light source within the dome, then the creatures inside are enveloped in darkness. The illusion lasts until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 3,
};

export const SearingRadiance: Action = {
  name: "Searing radiance",
  effect:
    "You discharge an intense ray of infrared light at your target. They take 5 fire damage and catch fire.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 4,
};

export const Disguise: Action = {
  name: "Disguise",
  effect:
    "You manipulate the light reflected off your target to dramatically alter their appearance. The illusion lasts until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};

export const Apparition: Action = {
  name: "Apparition",
  effect:
    "You fabricate an image of a creature or object of a medium size or smaller. The image appears real to all creatures, however physical interaction reveals that it is just an illusion. The illusion lasts until your next turn.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};

export const Invisibility: Action = {
  name: "Invisibility",
  effect:
    "Light passes through your body and adjacent allies, making you invisible to visible and infrared light.",
  skillType: SkillType.Radiant,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Hyperbeam: Action = {
  name: "Hyperbeam",
  effect:
    "You channel light into a focalised beam that vaporises your target. They take 20 fire damage and catch fire.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};

export const SolarFlare: Action = {
  name: "Solar flare",
  effect:
    "Thermal energy radiates from a point you choose. Targets in the affected area take 15 fire damage and catch fire. If they have sight sense, they are also stunned and blinded.",
  skillType: SkillType.Radiant,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 8,
};

// Electrician actions
export const Taser: Action = {
  name: "Taser",
  effect: "Your target is stunned.",
  skillType: SkillType.Electric,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const ElectricCharge: Action = {
  name: "Charge",
  effect:
    "You take an action to build up and store potential energy. On your next turn, increase any electric damage dealt to a target by 5.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Chain: Action = {
  name: "Chain",
  effect:
    "If a target of your next electric attack is adjacent to another creature, you can optionally extend the attack to hit the adjacent creature as well.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Shock: Action = {
  name: "Shock",
  effect: "Target takes 10 electric damage.",
  skillType: SkillType.Electric,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Impedance: Action = {
  name: "Impedance",
  effect:
    "You focus your attention towards countering the spells of your foes. Targets of your choosing are protected with 5 electric armour.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};

export const Levitate: Action = {
  name: "Levitate",
  effect:
    "You can charge your body to repel the ground and levitate at will. Whilst hovering, you can move at your walking speed.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Attract: Action = {
  name: "Attract",
  effect:
    "Your body turns into a super magnet that attracts magnetic metals. Nearby, unsecured, small metal objects fly towards you. Roll a 1d20 to see how effective the action is at attracting secured or large metal objects.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};

export const Zap: Action = {
  name: "Zap",
  effect: "Targets take 10 electric damage.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 2,
};

export const MagnetiseArena: Action = {
  name: "Magnetise arena",
  effect:
    "You magnetise all nearby magnetic metals. They turn into magnets and attract each other.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 4,
};

export const Electrocute: Action = {
  name: "Electrocute",
  effect: "Target takes 25 electric damage and are stunned.",
  skillType: SkillType.Electric,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};

export const Lightning: Action = {
  name: "Lightning",
  effect: "Target takes 30 electric damage and are stunned.",
  skillType: SkillType.Electric,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 5,
};

export const Discharge: Action = {
  name: "Discharge",
  effect: "Targets take 20 electric damage.",
  skillType: SkillType.Electric,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 6,
};

// Stormcaller actions
export const Gust: Action = {
  name: "Gust",
  effect:
    "Small sized creatures are thrown back 5m. Medium sized and smaller creatures move at half speed in the direction of the wind on their next turn. Targets are asnomic.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 2,
};

export const Hurl: Action = {
  name: "Hurl",
  effect:
    "You throw a small object in your possession to a target. They target 5 force damage.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Propel: Action = {
  name: "Propel",
  effect:
    "You and your allies can move at double your regular speed this turn.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 2,
};

export const WindBarrier: Action = {
  name: "Wind barrier",
  effect:
    "You protect an area with rapid winds. Any creature or object that attempts to enter the area needs to succeed on a strength check, otherwise they are thrown back 5m and restrained for the rest of their turn.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 3,
};

export const AirSlash: Action = {
  name: "Air slash",
  effect:
    "Target takes 5 force damage. If medium sized or smaller, they are thrown back 5m.",
  skillType: SkillType.Kinetic,
  range: Range.Adjacent,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

export const Torrent: Action = {
  name: "Torrent",
  effect:
    "Large sized creatures are thrown back 5m. Medium sized and smaller creatures are thrown back 15m and are stunned. Targets cannot move against the wind on their turn. Targets are asnomic.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Cone,
  staminaCost: 3,
};

export const Rifle: Action = {
  name: "Rifle",
  effect:
    "You shoot a small object in your possession to a target at a rapid speed. They target 5 slash damage and 10 force damage.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 3,
};

export const Fly: Action = {
  name: "Fly",
  effect: "You can fly at a speed up to 5 times your walking speed.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};

export const WindShield: Action = {
  name: "Wind shield",
  effect:
    "You surround yourself with a torrent of wind. You are protected with 5 force armour and 5 slash armour. Creatures that attempt to melee attack you are stunned afterwards.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 2,
};

export const Catapult: Action = {
  name: "Catapult",
  effect:
    "You throw a large sized or smaller creature up to 20m through the air. They take 5 force damage for every 5m thrown.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 4,
};

export const Tornado: Action = {
  name: "Tornado",
  effect:
    "You summon a tornado to destroy your foes. Large sized and smaller creatures are thrown back 10m. They take 20 force damage and are stunned.",
  skillType: SkillType.Kinetic,
  range: Range.Nearby,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 6,
};

export const Hurricane: Action = {
  name: "Hurricane",
  effect:
    "You unleash a tempest. Medium sized and smaller creatures are thrown 5m in a random direction. Targets are stunned and are restrained. They take 5 electric, 5 slash and 5 force damage as they are struck by objects from their environment. Targets are asnomic.",
  skillType: SkillType.Kinetic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Arena,
  staminaCost: 8,
};
