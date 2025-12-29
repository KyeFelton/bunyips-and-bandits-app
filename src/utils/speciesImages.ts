// Englorian species images
import avianEnglorianImage from "../images/species/engloria/avian.png";
import giantEnglorianImage from "../images/species/engloria/giant.png";
import goblinEnglorianImage from "../images/species/engloria/goblin.png";
import humanEnglorianImage from "../images/species/engloria/human.png";
import delverEnglorianImage from "../images/species/engloria/delver.png";

// Downunda species images
import avianDownundaImage from "../images/species/downunda/avian.png";
import giantDownundaImage from "../images/species/downunda/giant.png";
import goblinDownundaImage from "../images/species/downunda/goblin.png";
import humanDownundaImage from "../images/species/downunda/human.png";
import reptilianDownundaImage from "../images/species/downunda/reptilian.png";
import delverDownundaImage from "../images/species/downunda/delver.png";

const speciesImages: Record<string, Record<string, string>> = {
  Engloria: {
    Avian: avianEnglorianImage,
    Giant: giantEnglorianImage,
    Goblin: goblinEnglorianImage,
    Human: humanEnglorianImage,
    Delver: delverEnglorianImage,
  },
  Downunda: {
    Avian: avianDownundaImage,
    Giant: giantDownundaImage,
    Goblin: goblinDownundaImage,
    Human: humanDownundaImage,
    Reptilian: reptilianDownundaImage,
    Delver: delverDownundaImage,
  },
};

export const getSpeciesImage = (
  speciesName: string,
  ancestry: string
): string => {
  const ancestryImages = speciesImages[ancestry];
  if (!ancestryImages) {
    return speciesImages.Downunda.Human;
  }
  return ancestryImages[speciesName] || speciesImages.Downunda.Human;
};
