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

// export const HeatBlast: Action = {
//   name: "Heat blast",
//   effect:
//     "A blast of heat bursts from your body. Targets take 5 fire damage and catch fire.",
//   skillType: SkillType.Pyro,
//   range: Range.Self,
//   areaOfEffect: AreaOfEffect.Cone,
//   staminaCost: 4,
// };

// export const Fireball: Action = {
//   name: "Fireball",
//   effect:
//     "You throw a ball of flaming liquid at your target that explodes on impact. Your target takes 10 fire damage and catches fire.",
//   skillType: SkillType.Pyro,
//   range: Range.Nearby,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 3,
// };

// export const Tremor: Action = {
//   name: "Tremor",
//   effect:
//     "You create a powerful vibration that causes your target to tremor. The target is stunned.",
//   skillType: SkillType.Sonic,
//   range: Range.Adjacent,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 1,
// };

// export const Shatter: Action = {
//   name: "Shatter",
//   effect:
//     "Your target begins to shatter as you emit powerful pulses. They take 10 force damage.",
//   skillType: SkillType.Sonic,
//   range: Range.Adjacent,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 2,
// };

// export const Mirage: Action = {
//   name: "Mirage",
//   effect:
//     "You manipulate the light reflected off your target to slightly alter their appearance. The illusion lasts until your next turn.",
//   skillType: SkillType.Radiant,
//   range: Range.Nearby,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 1,
// };

// export const DazzlingLights: Action = {
//   name: "Dazzling lights",
//   effect: "Dazzling lights flash to stun targets with sight sense.",
//   skillType: SkillType.Radiant,
//   range: Range.Distant,
//   areaOfEffect: AreaOfEffect.Cone,
//   staminaCost: 1,
// };

// export const Chain: Action = {
//   name: "Chain",
//   effect:
//     "If a target of your next electric attack is adjacent to another creature, you can optionally extend the attack to hit the adjacent creature as well.",
//   skillType: SkillType.Electric,
//   range: Range.Self,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 1,
// };

// export const MagnetiseArena: Action = {
//   name: "Magnetise arena",
//   effect:
//     "You magnetise all nearby magnetic metals. They turn into magnets and attract each other.",
//   skillType: SkillType.Electric,
//   range: Range.Self,
//   areaOfEffect: AreaOfEffect.Arena,
//   staminaCost: 4,
// };

// export const Propel: Action = {
//   name: "Propel",
//   effect:
//     "You and your allies can move at double your regular speed this turn.",
//   skillType: SkillType.Kinetic,
//   range: Range.Self,
//   areaOfEffect: AreaOfEffect.Arena,
//   staminaCost: 2,
// };

// export const AirSlash: Action = {
//   name: "Air slash",
//   effect:
//     "Target takes 5 force damage. If medium sized or smaller, they are thrown back 5m.",
//   skillType: SkillType.Kinetic,
//   range: Range.Adjacent,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 1,
// };

// export const WindShield: Action = {
//   name: "Wind shield",
//   effect:
//     "You surround yourself with a torrent of wind. You are protected with 5 force armour and 5 slash armour. Creatures that attempt to melee attack you are stunned afterwards.",
//   skillType: SkillType.Kinetic,
//   range: Range.Self,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 2,
// };

// export const Focus: Action = {
//   name: "Focus",
//   effect:
//     "You enter a meditative state to close your mind from outside detection and interference. You are composed.",
//   skillType: SkillType.Psychic,
//   range: Range.Nearby,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 0,
// };

// Unassigned
// export const Assist: Action = {
//   name: "Assist",
//   effect: "Your ally is empowered.",
//   skillType: SkillType.Psychic,
//   range: Range.Nearby,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 1,
// };

// export const MassAssist: Action = {
//   name: "Mass assist",
//   effect: "You empower all nearby allies.",
//   skillType: SkillType.Psychic,
//   range: Range.Nearby,
//   areaOfEffect: AreaOfEffect.Arena,
//   staminaCost: 3,
// };
