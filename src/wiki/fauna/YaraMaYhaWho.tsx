import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The yara-ma-yha-who is a small, predatory hominids native to the forests of
    Downunda. It's well known for its distinctive red skin, expandable body, and
    vampiric feeding behaviour.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Yara-ma-yha-who stand roughly 1 metre tall, with hairless bodies and
        dark red skin. Their heads are disproportionately large and serpentine
        in shape, featuring wide, toothless mouths capable of stretching to
        engulf prey whole. Each finger and toe ends in a cup-shaped sucker,
        allowing them to cling to branches or hold victims immobile. Their
        bellies can expand dramatically during feeding, accommodating prey of
        similar size.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        These creatures inhabit dense forests, particularly those near water
        sources such as creeks and billabongs. They rest in tree hollows, caves,
        or shaded foliage and are active only during daylight hours. They avoid
        open terrain and human settlements, preferring secluded, humid
        environments.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Yara-ma-yha-who feed exclusively on living creatures, draining their
        blood before swallowing them whole. They primarily target small to
        medium-sized animals but are known to attack people that stray into
        their territory. Their feeding process involves immobilising prey with
        suction from their fingers and toes, then consuming them in a single
        gulp. After digestion, they drink water and rest before regurgitating
        their victims. Victims regurgitated by the creature emerge alive but
        weakened, shorter, and tinged red. Repeated encounters are said to
        transform victims into yara-ma-yha-who themselves.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Yara-ma-yha-who are solitary and territorial. They hunt by remaining
        motionless in tree branches, waiting for prey to pass beneath them
        before dropping suddenly. After feeding, they enter a state of torpor.
        The species shows little interest in carrion and ignores motionless or
        apparently lifeless prey—leading to the common advice that "playing
        dead" can deter attack.
      </p>
    </Body>
  </>
);

export const YaraMaYhaWho: WikiContent = {
  id: WikiId.YaraMaYhaWho,
  category: WikiCategory.Fauna,
  title: "Yara-ma-yha-who",
  blurb:
    "The yara-ma-yha-who is a small, predatory hominids native to the forests of Downunda.",
  summary,
  main: content,
};
