import { AreaOfEffect } from "../../enums/AreaOfEffect";
import { Range } from "../../enums/Range";
import { Action } from "../../models/actions";

export const Dash: Action = {
  name: "Dash",
  description:
    "You perform a quick dash. Move up to the distance specified for your speed stat.",
  range: Range.Self,
  areaOfEffect: AreaOfEffect.SingleTarget,
  staminaCost: 1,
};

// const getText = (distance: string, locomotion: string) => `${distance}`

// export const getDash = ({ run, swim, climb, fly }: {
//   run?: string,
//   swim?: string,
//   climb?: string,
//   fly?: string
// }): Action => ({
//   name: "Dash",
//   description:
//     `You dash up to a ${run}${run ? `${run} distance ` : ''} `,
//   range: Range.Self,
//   areaOfEffect: AreaOfEffect.SingleTarget,
//   staminaCost: 1,
// })
