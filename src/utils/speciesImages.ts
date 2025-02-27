import minotaurImage from "../images/species/minotaur.png";
import jeliImage from "../images/species/jeli.png";
import pixieImage from "../images/species/pixie.png";
import { AllSpecies } from "../models/species";

const speciesImages: Record<string, string> = {
  Minotaur: minotaurImage,
  Jeli: jeliImage,
  Pixie: pixieImage,
};

export const getSpeciesImage = (speciesName: string): string => {
  return speciesImages[speciesName] || speciesImages[AllSpecies.Minotaur.name];
};
