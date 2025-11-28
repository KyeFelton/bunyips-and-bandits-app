import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Chargoes are medium-sized, sandy-coloured canids native to the arid regions
    of Downunda. They are known for the dark markings along their body that can
    ignite briefly when threatened and their importance to Dharrigal culture.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Chargoes resemble dingoes in size and physique, with sandy coats and
        black patterned markings on the feet, back, and snout. They can ignite
        their black fur to catch fire, to aid in intimidation or defence. Their
        vocalisations range from howls to sharp barks, and they carry a strong
        smell of scorched earth when on fire.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Chargoes inhabit arid scrublands, temperate bush, and desert fringes.
        They are often found near Dharrigal settlements but maintain a presence
        in the wild where water sources and small game are available.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Chargoes are opportunistic carnivores, feeding on small mammals,
        reptiles, birds, and carrion. When near settlements, they may scavenge
        scraps but retain hunting behaviour.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Chargoes are semi-social, living in loose family packs or pairing off in
        breeding seasons. They are cautious but loyal toward familiar
        individuals. Their fire is used as a deterrent against predators and
        rivals, but also a display of dominance during the mating season. They
        demonstrate cooperative hunting behaviour and maintain territorial
        ranges around dens.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        The Dharrigal maintain semi-domesticated relationships with chargoes,
        using them for companionship, early-warning against threats, and
        assistance in tracking and hunting. Chargoes remain capable of surviving
        independently in the wild, and Dharrigal traditions emphasise mutual
        respect rather than strict control.
      </p>
    </Body>
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
