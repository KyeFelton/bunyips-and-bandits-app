import { Class } from "../../models/class";
import { Archer, Stealthy, Dexterous } from "../traits";

export const Hunter: Class = {
  name: "Hunter",
  description:
    "Hunters are masters of tracking, stealth, and precision strikes. They excel at ranged combat and can pursue their prey relentlessly through any terrain.",
  skillBonuses: {},
  startingTraits: [Archer, Stealthy, Dexterous],
};
