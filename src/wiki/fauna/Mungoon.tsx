import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Mungoons are a large omnivorous monitor lizard native to the arid regions of
    The Outback of Downunda. Recognised for its powerful build and acute sense
    of smell, it plays a major role in the desert ecosystem as both scavenger
    and opportunistic predator. Despite its bulk, mungoons are capable of short
    bursts of speed and possesses a venomous bite, making it one of the more
    formidable reptiles of the region.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Mungoons reach an average length of 10m from snout to tail, with a
        shoulder height of approximately 1.8m. Their scales are thick and
        coarse, typically ranging in colour from deep ochre to dark grey,
        providing camouflage against the desert sands and stone. The head is
        broad and wedge-shaped, with nostrils positioned high on the snout to
        aid in detecting scents carried by the wind. Their forked tongues flick
        continuously to sample the air for traces of carrion. The species emits
        a low hissing sound when threatened, and older individuals are noted to
        carry a faint musky odour.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Mungoons are native to the The Outback, where they inhabit rocky
        outcrops, dry riverbeds, and sparse scrublands. They are most active
        during the cooler hours of dawn and dusk, often retreating to burrows or
        shaded crevices during the peak of the day. Although primarily
        terrestrial, they are capable of swimming across desert springs and
        shallow rivers when necessary.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        As omnivores, mungoons feed on a wide variety of food sources. Their
        primary diet consists of carrion, which they are able to locate over
        long distances using their advanced sense of smell. They will also hunt
        medium to large sized animals, including humans and other folk, and will
        forage for tubers, fruits, and succulents when available. Their venom
        assists in subduing live prey and in the digestion process.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Mungoons are predominantly solitary creatures, maintaining large
        territories that they patrol regularly. They are mostly opportunistic
        feeders, capable of going several weeks without food. Breeding occurs in
        the cooler months, with females laying clutches of up to a dozen
        leathery eggs in shallow burrows. Hatchlings are independent from birth
        and often disperse quickly to avoid predation by larger mungoons.
      </p>
    </Body>
  </>
);

export const Mungoon: WikiContent = {
  id: WikiId.Mungoon,
  category: WikiCategory.Fauna,
  title: "Mungoon",
  blurb:
    "Mungoons are a large omnivorous monitor lizard native to the arid regions of The Outback of Downunda.",
  summary,
  main: content,
};
