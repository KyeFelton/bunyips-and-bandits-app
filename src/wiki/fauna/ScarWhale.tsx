import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Scar whales are massive predatory cetaceans that inhabit the open oceans of
    the world. They are apex predators, known for their aggressive hunting
    behaviour and distinctive bodies covered in scars from encounters with both
    prey and rivals.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Scar whales possess elongated, muscular bodies with thick, dark grey
        skin marred by pale scars. Their heads are broad and reinforced with
        bony ridges used for ramming prey or defending territory. They have
        several rows of sharp, conical teeth and small eyes adapted for deep-sea
        hunting. Their vocalisations include low-frequency bellows and rapid
        clicking used for communication and echolocation.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        They are found throughout temperate and tropical oceans, from deep open
        waters to continental shelves. Scar whales often follow migratory routes
        of large schools of fish or sea mammals, surfacing infrequently and
        diving for extended periods.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Scar whales are opportunistic predators, feeding on fish, squid, seals,
        and even other whales. They have been observed attacking large ocean
        creatures when food is scarce.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Scar whales are social pack hunters. They are intelligent and persistent
        hunters, using coordinated strikes and ambush tactics to overwhelm
        larger prey. Calving occurs once every few years, and mothers are known
        to defend their young with extreme aggression.
      </p>
    </Body>
  </>
);

export const ScarWhale: WikiContent = {
  id: WikiId.ScarWhale,
  category: WikiCategory.Fauna,
  title: "Scar Whale",
  blurb:
    "Scar whales are massive predatory cetaceans that inhabit the open oceans of the world.",
  summary,
  main: content,
};
