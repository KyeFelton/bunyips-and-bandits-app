import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The culture of Drop Bears is an offshoot of mainstream Dharrigal culture.
    Whilst Drop Bears share some similar religious beliefs to Dharrigal people,
    they are differentiated by their savagery and chaotic nature.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Drop Bears value strength above all else and always strive to improve.
        Each clan is led by a patriarch called a boss, who has proven their
        might in a clan fighting contest. The boss takes all females in the clan
        to be his wife. No other male drop bear is permitted to father children
        (although many still do have affairs in secrecy). Male Drop Bears pride
        themselves on their number of wives and sons, as well as their scars
        obtained from battles and rituals.
      </p>
      <p>
        Drop Bears don't farm, but instead forage, scavenge and raid other
        civilisations to get the food and resources they require. The strongest
        males carry out raids led by the boss, whilst the weaker males, females
        and children forage for food and complete the domestic chores.
      </p>
      <p>
        Being arboreal creatures, Drop Bears prefer to be in the forest and
        build their homes in tree canopies. They are known for hiding in trees
        and pouncing on prey from above. Because they rely on taking food and
        resources from their environment, Drop Bears regularly migrate to new
        lands once a region has been depleted of resources.
      </p>
    </Body>
  </>
);

export const Dropbear: WikiContent = {
  id: WikiId.Dropbear,
  category: WikiCategory.Cultures,
  title: "Drop Bear",
  blurb:
    "The culture of Drop Bears is an offshoot of mainstream Dharrigal culture.",
  summary,
  main: content,
};
