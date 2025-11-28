import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Grass spiders are large burrowing arachnids native to the grasslands and
    scrub regions of Downunda. They are well-camouflaged predators that rely on
    ambush and a unique paralytic defence mechanism involving specialised hairs.
    Their ability to blend seamlessly into their surroundings makes them
    difficult to detect even at close range.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Grass spiders possess dense green hairs across their bodies that
        resemble blades of grass, with a hard, brown exoskeleton patterned like
        dirt. They are typically the size of a large dog, with thick legs
        adapted for digging. When disturbed, they produce a faint rustling sound
        similar to wind passing through dry grass.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        These spiders inhabit open plains, grasslands, and semi-arid regions,
        where they burrow into loose soil or hide among rocks. Their burrows are
        lined with silk and covered by vegetation to conceal the entrance. They
        are most active during dusk and dawn when visibility is low.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Grass spiders are carnivorous ambush predators that feed on mammals,
        reptiles, and ground-dwelling birds. They rely on stillness and
        camouflage to avoid detection until prey moves within range.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Grass spiders are solitary and territorial. When potential prey
        approaches, they eject fine, green hairs into the air using rapid muscle
        contractions. These hairs carry microscopic hooks and a paralytic
        compound that immobilises prey within minutes. Once the target is
        incapacitated, the spider emerges to inject digestive enzymes and
        consume the remains. Their burrows are often reused for years, expanding
        as the spider grows.
      </p>
    </Body>
  </>
);

export const GrassSpider: WikiContent = {
  id: WikiId.GrassSpider,
  category: WikiCategory.Fauna,
  title: "Grass Spider",
  blurb:
    "Grass spiders are large burrowing arachnids native to the grasslands and scrub regions of Downunda.",
  summary,
  main: content,
};
