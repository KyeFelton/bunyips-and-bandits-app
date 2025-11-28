import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Sand raptors are swift, feathered reptilian predators adapted to desert
    environments. Highly valued by the Mennanese, they serve roles analogous to
    working canines, assisting in scouting, defence, and hunting by caravan
    groups.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Sand raptors are small to medium bipedal reptiles with desert-coloured
        plumage, slender snouts, and curved talons. Their plumage often includes
        striping or mottled patterns for camouflage in dunes. They communicate
        using chirps, trills, and hissing calls.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Sand raptors inhabit dunes, rocky outcrops, and arid plains. Wild
        populations are concentrated near desert oases and rocky shade
        formations, where small prey animals are abundant.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        They are carnivorous, primarily hunting small mammals, lizards, and
        birds. In domesticated settings they are fed prepared meat or fresh
        desert game.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Sand raptors are social and form stable pack structures led by dominant
        breeding pairs. They are alert, energetic, and territorial toward
        unfamiliar creatures. Packs cooperate in hunting and use coordinated
        tactics to corner prey. Courtship consists of vocal displays and feather
        spreading. They are highly responsive to training and form strong bonds
        with handlers.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        The Mennanese have domesticated sand raptors for guarding caravans,
        hunting, scouting, and companionship. Domesticated individuals are
        selectively bred for temperament and endurance in extreme desert
        conditions. They are integral to Mennanese nomadic life, often
        travelling alongside trunkirds and serving as both working animals and
        cultural symbols.
      </p>
    </Body>
  </>
);

export const SandRaptor: WikiContent = {
  id: WikiId.SandRaptor,
  category: WikiCategory.Fauna,
  title: "Sand Raptor",
  blurb:
    "Sand raptors are swift, feathered reptilian predators adapted to desert environments.",
  summary,
  main: content,
};
