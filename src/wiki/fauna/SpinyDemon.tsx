import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Spiny demons are large, heavily armoured, herbivorous lizards native to the
    deserts and savannahs of Downunda. Reaching up to five metres long, they are
    covered in dense, thorn-like scales and capable of ejecting acidic blood
    from their eyes to deter predators.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Spiny demons possess thick, overlapping scales tipped with intimidating
        spines across their bodies. Their skin varies in shades of sandy beige
        and red to blend with arid landscapes. Their head is squat with black
        eyes capable of expelling acidic blood as a defensive measure. Massive
        clawed feet and a muscular tail enable them to traverse rocky terrain
        and dig shallow basins for resting.
      </p>
    </Body>

    <H2>Habitat</H2>
    <Body>
      <p>Spiny demons are native to the arid regions of Downunda.</p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        These creatures feed mainly on tough desert shrubs, succulents, and
        roots, using a powerful beak-like jaw to shear through fibrous plants.
        Their spines collect dew from the air, channelling moisture toward their
        mouths, allowing them to survive in extreme drought.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Spiny demons are solitary and slow-moving, relying on camouflage and
        armour to avoid conflict. When threatened, they inflate their bodies,
        raise their spines, and if provoked further, project acidic blood to
        incapacitate attackers.
      </p>
    </Body>
  </>
);

export const SpinyDemon: WikiContent = {
  id: WikiId.SpinyDemon,
  category: WikiCategory.Fauna,
  title: "Spiny Demon",
  blurb:
    "Spiny demons are large, heavily armoured, herbivorous lizards native to the deserts and savannahs of Downunda.",
  summary,
  main: content,
};
