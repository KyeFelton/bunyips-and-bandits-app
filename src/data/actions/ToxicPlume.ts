import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { SkillType } from "../../enums/SkillType";
import { Action } from "../../models/actions";

export const ToxicPlume: Action = {
  name: "Toxic plume",
  effect:
    "You expel noxious gas from your body. Nearby targets take 3 toxic damage and become anosmic.",
  skillType: SkillType.Toxic,
  range: Range.Self,
  areaOfEffect: AreaOfEffect.Sphere,
  staminaCost: 4,
};
