import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    Shishi are stout, lion-like reptiles domesticated by the Longren for
    protective duty. Valued for their vigilance, strength, and steadfast
    devotion, they serve as guardians of homes, temples, farms and mountain
    passes.
  </p>
);

const content = (
  <>
    <h2>Description</h2>

    <p>
      Shishi resemble stocky lion-dogs with scaled hides rather than fur. Their
      colouring ranges from jade green to slate grey, often mottled in patterns
      reminiscent of carved stone. They bear curling whisker-tendrils and thick
      manes of bristled spines that flare when agitated. Their jaws are broad
      and powerful, and their eyes radiate a steady, watchful glow.
    </p>

    <h2>Habit</h2>

    <p>
      Domesticated shishi live within Longren settlements. Wild shishi, though
      rare, dwell in sheltered cliffsides and stone caverns of Shan Guo's high
      mountains, favouring rocky terrain and narrow ledges. They enjoy vantage
      points overlooking their territory, maintaining constant awareness of
      their surroundings.
    </p>

    <h2>Diet</h2>

    <p>
      Shishi are omnivorous with carnivorous tendencies, consuming small
      mountain fauna and fruits. Domesticated shishi are fed a controlled diet
      of meat, grains, and vegetables.
    </p>

    <h2>Behaviour</h2>

    <p>
      Shishi are loyal, disciplined, and instinctively protective. They bond
      closely with handlers and will defend Longren communities without
      hesitation. They rarely bark or growl; instead they maintain silent
      vigilance, emitting low rumbles only when detecting threat. Shishi breed
      infrequently in the wild with small litters. Domestic shishi offspring are
      carefully trained from a young age to have calm temperaments and
      unwavering discipline.
    </p>
  </>
);

export const Shishi: WikiContent = {
  id: WikiId.Shishi,
  category: WikiCategory.Fauna,
  title: "Shishi",
  blurb:
    "Shishi are stout, lion-like reptiles domesticated by the Longren for protective duty.",
  summary,
  main: content,
};
