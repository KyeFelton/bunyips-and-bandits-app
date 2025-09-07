import gnomeImage from "../images/species/gnome.png";
import cobberImage from "../images/species/cobber.png";
import hobgoblinImage from "../images/species/hobgoblin.png";
import humanImage from "../images/species/human.png";
import goaImage from "../images/species/goa.png";
import jellyImage from "../images/species/jelly.png";
import minotaurImage from "../images/species/minotaur.png";
import pixieImage from "../images/species/pixie.png";
import dropbearImage from "../images/species/dropbear.png";
import falkirImage from "../images/species/falkir.png";
import yowieImage from "../images/species/yowie.png";
import { AllSpecies } from "../data/species";

const speciesImages: Record<string, string> = {
  Cobber: cobberImage,
  Dropbear: dropbearImage,
  Gnome: gnomeImage,
  Human: humanImage,
  Hobgoblin: hobgoblinImage,
  Goa: goaImage,
  // Jelly: jellyImage,
  // Minotaur: minotaurImage,
  // Pixie: pixieImage,
  Falkir: falkirImage,
  Yowie: yowieImage,
};

export const getSpeciesImage = (speciesName: string): string => {
  return speciesImages[speciesName] || speciesImages[AllSpecies.Human.name];
};
