import badgermanImage from "../images/species/badgerman.png";
import cobberImage from "../images/species/cobber.png";
import cormiardImage from "../images/species/cormiard.png";
import goaImage from "../images/species/goa.png";
import jeliImage from "../images/species/jeli.png";
import minotaurImage from "../images/species/minotaur.png";
import pixieImage from "../images/species/pixie.png";
import tengarooImage from "../images/species/tengaroo.png";
import vulturanImage from "../images/species/vulturan.png";
import yowieImage from "../images/species/yowie.png";
import { AllSpecies } from "../models/species";

const speciesImages: Record<string, string> = {
  Badgerman: badgermanImage,
  Cobber: cobberImage,
  Cormiard: cormiardImage,
  Goa: goaImage,
  Jeli: jeliImage,
  Minotaur: minotaurImage,
  Pixie: pixieImage,
  Tengaroo: tengarooImage,
  Vulturan: vulturanImage,
  Yowie: yowieImage,
};

export const getSpeciesImage = (speciesName: string): string => {
  return speciesImages[speciesName] || speciesImages[AllSpecies.Minotaur.name];
};
