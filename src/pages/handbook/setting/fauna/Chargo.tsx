import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    Chargoes are medium-sized, sandy-coloured canids native to the arid regions
    of Downunda. They are known for the dark markings along their body that can
    ignite briefly when threatened and their importance to Dharrigal culture.
  </p>
);

const content = (
  <>
    <h2>Description</h2>

    <p>
      Chargoes resemble dingoes in size and physique, with sandy coats and black
      patterned markings on the feet, back, and snout. They can ignite their
      black fur to catch fire, to aid in intimidation or defence. Their
      vocalisations range from howls to sharp barks, and they carry a strong
      smell of scorched earth when on fire.
    </p>

    <h2>Habit</h2>

    <p>
      Chargoes inhabit arid scrublands, temperate bush, and desert fringes. They
      are often found near Dharrigal settlements but maintain a presence in the
      wild where water sources and small game are available.
    </p>

    <h2>Diet</h2>

    <p>
      Chargoes are opportunistic carnivores, feeding on small mammals, reptiles,
      birds, and carrion. When near settlements, they may scavenge scraps but
      retain hunting behaviour.
    </p>

    <h2>Behaviour</h2>

    <p>
      Chargoes are semi-social, living in loose family packs or pairing off in
      breeding seasons. They are cautious but loyal toward familiar individuals.
      Their fire is used as a deterrent against predators and rivals, but also a
      display of dominance during the mating season. They demonstrate
      cooperative hunting behaviour and maintain territorial ranges around dens.
    </p>

    <h2>Domestication</h2>

    <p>
      The Dharrigal maintain semi-domesticated relationships with chargoes,
      using them for companionship, early-warning against threats, and
      assistance in tracking and hunting. Chargoes remain capable of surviving
      independently in the wild, and Dharrigal traditions emphasise mutual
      respect rather than strict control.
    </p>
  </>
);

export const Chargo: WikiContent = {
  id: WikiId.Chargo,
  category: WikiCategory.Fauna,
  title: "Chargo",
  blurb:
    "Chargoes are medium-sized, sandy-coloured canids native to the arid regions of Downunda.",
  summary,
  main: content,
};
