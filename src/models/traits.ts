import { Effect } from "./effect";

export type Trait = {
  name: string;
  description: string;
  effects?: Effect[];
};

// export const WaterBreathing: Trait = {
//   name: "Water breathing",
//   description:
//     "You can extract oxygen from the water to create an air bubble around you and allow you to breathe underwater.",
// };

// export const ThickSkin: Trait = {
//   name: "Thick skin",
//   description: "Gain +2 armour for slash and force damage.",
//   effects: [
//     {
//       armour: {
//         damageType: DamageType.Slash,
//         bonus: 2,
//       },
//     },
//     {
//       armour: {
//         damageType: DamageType.Force,
//         bonus: 2,
//       },
//     },
//   ],
// };

// export const StrongWilled: Trait = {
//   name: "Strong willed",
//   description: "Gain +2 bonus to willpower.",
//   effects: [
//     {
//       skill: {
//         skillType: SkillType.Willpower,
//         bonus: 2,
//       },
//     },
//   ],
// };
