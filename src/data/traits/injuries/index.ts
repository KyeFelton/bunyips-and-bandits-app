import { Trait } from "../../../models/traits";
import { Blind } from "./Blind";
import { BrokenJaw } from "./BrokenJaw";
import { ChronicPain } from "./ChronicPain";
import { CrushedArm } from "./CrushedArm";
import { DamagedLung } from "./DamagedLung";
import { Deaf } from "./Deaf";
import { FracturedSpine } from "./FracturedSpine";
import { MemoryLoss } from "./MemoryLoss";
import { RuinedLeg } from "./RuinedLeg";
import { SevereBurn } from "./SevereBurn";
import { Delusion } from "./Delusion";
import { Depression } from "./Depression";
import { Frightened } from "./Frightened";
import { Hallucinations } from "./Hallucinations";
import { Madness } from "./Madness";
import { NightTerrors } from "./NightTerrors";
import { Obsession } from "./Obsession";
import { Paranoia } from "./Paranoia";
import { Phobia } from "./Phobia";

export const physicalInjuries: Trait[] = [
  RuinedLeg,
  FracturedSpine,
  CrushedArm,
  Blind,
  Deaf,
  DamagedLung,
  BrokenJaw,
  MemoryLoss,
  ChronicPain,
  SevereBurn,
];

export const mentalInjuries: Trait[] = [
  MemoryLoss,
  Hallucinations,
  Delusion,
  NightTerrors,
  Phobia,
  Depression,
  Madness,
  Obsession,
  Frightened,
  Paranoia,
];
