// Englorian species images
import avianEnglorianImage from "../images/species/engloria/avian.png";
import giantEnglorianImage from "../images/species/engloria/giant.png";
import goblinEnglorianImage from "../images/species/engloria/goblin.png";
import humanEnglorianImage from "../images/species/engloria/human.png";
import delverEnglorianImage from "../images/species/engloria/delver.png";

// Downunda species images
import avianDownundaImage from "../images/species/dharrigal/avian.png";
import giantDownundaImage from "../images/species/dharrigal/giant.png";
import goblinDownundaImage from "../images/species/dharrigal/goblin.png";
import humanDownundaImage from "../images/species/dharrigal/human.png";
import reptilianDownundaImage from "../images/species/dharrigal/reptilian.png";
import delverDownundaImage from "../images/species/dharrigal/delver.png";

const speciesImages: Record<string, Record<string, string>> = {
  Engloria: {
    Avian: avianEnglorianImage,
    Giant: giantEnglorianImage,
    Goblin: goblinEnglorianImage,
    Human: humanEnglorianImage,
    Delver: delverEnglorianImage,
  },
  Dharrigal: {
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
