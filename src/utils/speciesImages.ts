import badgermanImage from "../images/species/badgerman.png";
import cobberImage from "../images/species/cobber.png";
import cormiardImage from "../images/species/cormiard.png";
import goaImage from "../images/species/goa.png";
import jellyImage from "../images/species/jelly.png";
import minotaurImage from "../images/species/minotaur.png";
import pixieImage from "../images/species/pixie.png";
import tengarooImage from "../images/species/tengaroo.png";
import vulturanImage from "../images/species/vulturan.png";
import yowieImage from "../images/species/yowie.png";
import { AllSpecies } from "../data/species";

const speciesImages: Record<string, string> = {
  Badgerman: badgermanImage,
  Cobber: cobberImage,
  Cormiard: cormiardImage,
  Goa: goaImage,
  Jelly: jellyImage,
  Minotaur: minotaurImage,
  Pixie: pixieImage,
  Tengaroo: tengarooImage,
  Vulturan: vulturanImage,
  Yowie: yowieImage,
};

export const getSpeciesImage = (speciesName: string): string => {
  return speciesImages[speciesName] || speciesImages[AllSpecies.Minotaur.name];
};
