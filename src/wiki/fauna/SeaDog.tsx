import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Sea dogs are domesticated fur seals trained by Englorians for companionship
    and labour at sea. Intelligent and strong swimmers, they assist sailors and
    fishermen in hauling nets, towing small vessels, and locating fish, serving
    as both working partners and beloved mascots aboard ships.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Sea dogs resemble large fur seals with sleek, waterproof coats of grey,
        brown, or black. Their bark-like calls are used for communication with
        both humans and other sea dogs.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Sea Dogs inhabit coastal regions, harbours, and island settlements,
        typically remaining near human activity. Domesticated groups are trained
        to operate from docks and fishing boats, though wild populations persist
        along rocky shorelines where they haul out to rest and breed.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        They are piscivorous, feeding on fish, squid, and crustaceans.
        Domesticated sea dogs are often rewarded with fresh fish or salted
        rations after completing tasks.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Sea dogs are intelligent, social, and cooperative. They form strong
        attachments to human handlers and communicate through vocalisations and
        gestures. In the wild, they gather in colonies and exhibit playful
        behaviour such as chasing waves or tossing objects. They are generally
        non-aggressive but will defend their trainers or companions if
        threatened.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Englorians along the coasts and islands have domesticated sea dogs for
        centuries, integrating them into maritime culture. They are used to haul
        small vessels through calm waters, assist in fishing expeditions, and
        serve as loyal companions during long voyages. Sea dogs are often
        regarded as good luck among sailors, and many ships keep at least one as
        both helper and mascot.
      </p>
    </Body>
  </>
);

export const SeaDog: WikiContent = {
  id: WikiId.SeaDog,
  category: WikiCategory.Fauna,
  title: "Sea Dog",
  blurb:
    "Sea dogs are domesticated fur seals trained by Englorians for companionship and labour at sea.",
  summary,
  main: content,
};
