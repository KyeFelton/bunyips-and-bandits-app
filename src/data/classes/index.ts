import { Class } from "../../models/class";
import { Doctor } from "./Doctor";
import { Electrician } from "./Electrician";
import { Evoker } from "./Evoker";
import { Hunter } from "./Hunter";
import { Hypnotist } from "./Hypnotist";
import { Lightbender } from "./Lightbender";
import { Mindseer } from "./Mindseer";
import { Pyromaniac } from "./Pyromaniac";
import { Shapeshifter } from "./Shapeshifter";
import { Sonomancer } from "./Sonomancer";
import { Stormcaller } from "./Stormcaller";
import { Warrior } from "./Warrior";

export const AllClasses: Record<string, Class> = {
  [Doctor.name]: Doctor,
  [Electrician.name]: Electrician,
  [Evoker.name]: Evoker,
  [Hunter.name]: Hunter,
  [Hypnotist.name]: Hypnotist,
  [Lightbender.name]: Lightbender,
  [Mindseer.name]: Mindseer,
  [Pyromaniac.name]: Pyromaniac,
  [Shapeshifter.name]: Shapeshifter,
  [Sonomancer.name]: Sonomancer,
  [Stormcaller.name]: Stormcaller,
  [Warrior.name]: Warrior,
};

export {
  Doctor,
  Electrician,
  Evoker,
  Hunter,
  Hypnotist,
  Lightbender,
  Mindseer,
  Pyromaniac,
  Shapeshifter,
  Sonomancer,
  Stormcaller,
  Warrior,
};
