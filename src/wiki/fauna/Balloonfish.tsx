import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Balloonfish are a genus of aerial jellyfish native to the inland regions of
    Downunda. They are distinguished by their hydrogen-filled gas sacs that
    allow them to float through the air. Their ability to travel between
    isolated waterways makes them one of the few aquatic predators capable of
    aerial migration. Despite their delicate appearance, balloonfish are highly
    venomous.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Balloonfish resemble large, blue jellyfish with long trailing tentacles
        and an internal gas sac that gives them buoyancy. Their bodies emit a
        faint, pale glow at night, and they produce a soft hissing sound when
        expelling air for propulsion.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Balloonfish are found near freshwater billabongs, rivers, and wetlands
        across Downunda. They are often seen drifting in the air above
        waterways, particularly during humid or stormy weather. They descend to
        water surfaces to feed or rest.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        They feed primarily on small aquatic animals such as fish, amphibians,
        and crustaceans. When airborne, they occasionally capture insects that
        stray too close to their tentacles.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Balloonfish migrate between water sources by inflating their sacs and
        propelling themselves with short bursts of water jetting. They use their
        tentacles to ensnare prey, injecting a potent toxin to subdue it. Their
        toxicity and delicate form make them largely immune to predation, though
        their carcasses are sometimes scavenged by ground-dwellers after storms.
      </p>
    </Body>
  </>
);

export const Balloonfish: WikiContent = {
  id: WikiId.Balloonfish,
  category: WikiCategory.Fauna,
  title: "Balloonfish",
  blurb:
    "Balloonfish are a genus of aerial jellyfish native to the inland regions of Downunda.",
  summary,
  main: content,
};
