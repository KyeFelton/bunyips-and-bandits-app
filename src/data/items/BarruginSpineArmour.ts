import { DamageType } from "../../enums/DamageType";
import { Item } from "../../models/items";
import { WearType } from "../../enums/WearType";
import { SenseType } from "../../enums/SenseType";
import { SkillType } from "../../enums/SkillType";

// export const BarruginSpineArmour: Item = {
//   name: "Barrugin spine armour",
//   equippedEffects: [
//     {
//       armour: {
//         damageType: DamageType.Slash,
//         bonus: 1,
//       },
//     },
//     {
//       armour: {
//         damageType: DamageType.Force,
//         bonus: 1,
//       },
//     },
//     {
//       custom: "Foes that make contact with the armour take 2 Slash damage.",
//     },
//   ],
//   singleUse: false,
//   wearType: WearType.Clothes,
//   slots: 5,
//   defaultCost: 20000,
// };

export const BarruginSpineArmour: Item = {
  name: "Barrugin spine armour",
  equippedEffects: [
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
    {
      armour: {
        damageType: DamageType.Fire,
        bonus: -1,
      },
    },
    {
      Skill: {
        skillType: SkillType.Agility,
        bonus: -1,
      },
    },
    {
      Skill: {
        skillType: SkillType.Dexterity,
        bonus: -1,
      },
    },
    {
      Skill: {
        skillType: SkillType.Strength,
        bonus: 2,
      },
    },
    {
      sense: {
        lose: SenseType.Smell,
      }
    },
    {
      sense: {
        lose: SenseType.Sight,
      }
    },
    {
      sense: {
        gain: SenseType.Psychic,
      }
    },
    {
      body: {
        bonus: 2,
      },
    },
    {
      stamina: {
        bonus: 2,
      },
    },
    {
      custom: "Foes that make contact with the armour take 2 Slash damage.",
    },
  ],
  singleUse: false,
  wearType: WearType.Clothes,
  slots: 5,
  defaultCost: 20000,
};
