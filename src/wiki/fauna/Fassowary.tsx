import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Fassowaries are large, flightless birds native to the volcanic Fireridge
    Islands. They are notable for their ability to breath fire.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Fassowaries stand up to two metres tall and are characterised by bright
        red plumage with black markings, a prominent black casque on the head,
        and large, yellow feathers hanging from the neck. Their legs are
        powerful, ending in large claws adapted for rapid running and kicking.
        When threatened, they emit a low rumble before expelling flammable gas
        from their throats, which ignites in contact with air, producing a
        short-range burst of flame.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        They inhabit tropical and subtropical rainforests, volcanic slopes, and
        dense scrubland. Fassowaries tend to avoid open terrain and seek cover
        within thick vegetation.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Fassowaries are omnivores, consuming fruit, fungi, small animals, and
        carrion. Their digestive system can process tough plant matter and may
        aid in producing the combustible compounds used in their flame bursts.
        They are known to roast their food with flames before consuming it.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Fassowaries are solitary and territorial. They are generally shy but
        become aggressive if approached or cornered. When threatened, they rely
        first on intimidation through vocalisation and fire, followed by
        powerful kicks and pursuit. Females lay clutches of large eggs on the
        forest floor, which are incubated and guarded by males until hatching.
        Juveniles remain with the male for several months before dispersing.
      </p>
    </Body>
  </>
);

export const Fassowary: WikiContent = {
  id: WikiId.Fassowary,
  category: WikiCategory.Fauna,
  title: "Fassowary",
  blurb:
    "Fassowaries are large, flightless birds native to the volcanic Fireridge Islands.",
  summary,
  main: content,
};
