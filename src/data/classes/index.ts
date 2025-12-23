import { Class } from "../../models/class";
import { Electrician } from "./Electrician";
import { Mystic } from "./Mystic";
import { Hunter } from "./Hunter";
import { Lightbender } from "./Lightbender";
import { Mindseer } from "./Mindseer";
import { Pyromaniac } from "./Pyromaniac";
import { Shapeshifter } from "./Shapeshifter";
import { Sonomancer } from "./Sonomancer";
import { Stormcaller } from "./Stormcaller";
import { Warrior } from "./Warrior";

export const AllClasses: Record<string, Class> = {
  [Electrician.name]: Electrician,
  [Hunter.name]: Hunter,
  [Lightbender.name]: Lightbender,
  [Mindseer.name]: Mindseer,
  [Mystic.name]: Mystic,
  [Pyromaniac.name]: Pyromaniac,
  [Shapeshifter.name]: Shapeshifter,
  [Sonomancer.name]: Sonomancer,
  [Stormcaller.name]: Stormcaller,
  [Warrior.name]: Warrior,
};

export {
  Electrician,
  Hunter,
  Lightbender,
  Mindseer,
  Mystic,
  Pyromaniac,
  Shapeshifter,
  Sonomancer,
  Stormcaller,
  Warrior,
};
