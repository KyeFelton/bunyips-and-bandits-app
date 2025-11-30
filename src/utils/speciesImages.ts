// Englorian species images
import avianEnglorianImage from "../images/species/englorian/avian.png";
import giantEnglorianImage from "../images/species/englorian/giant.png";
import goblinEnglorianImage from "../images/species/englorian/goblin.png";
import humanEnglorianImage from "../images/species/englorian/human.png";
import spriteEnglorianImage from "../images/species/englorian/sprite.png";

// Downunda species images
import avianDownundaImage from "../images/species/downunda/avian.png";
import giantDownundaImage from "../images/species/downunda/giant.png";
import goblinDownundaImage from "../images/species/downunda/goblin.png";
import humanDownundaImage from "../images/species/downunda/human.png";
import reptilianDownundaImage from "../images/species/downunda/reptilian.png";
import spriteDownundaImage from "../images/species/downunda/sprite.png";

const speciesImages: Record<string, Record<string, string>> = {
  Englorian: {
    Avian: avianEnglorianImage,
    Giant: giantEnglorianImage,
    Goblin: goblinEnglorianImage,
    Human: humanEnglorianImage,
    Sprite: spriteEnglorianImage,
  },
  Downunda: {
    Avian: avianDownundaImage,
    Giant: giantDownundaImage,
    Goblin: goblinDownundaImage,
    Human: humanDownundaImage,
    Reptilian: reptilianDownundaImage,
    Sprite: spriteDownundaImage,
  },
};

export const getSpeciesImage = (
  speciesName: string,
  origin: string
): string => {
  const originImages = speciesImages[origin];
  if (!originImages) {
    return speciesImages.Downunda.Human;
  }
  return originImages[speciesName] || speciesImages.Downunda.Human;
};
