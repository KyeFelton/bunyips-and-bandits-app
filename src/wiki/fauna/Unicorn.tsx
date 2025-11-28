import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Unicorns are large, hoofed mammals native to the temperate meadows and
    woodlands of Engloria. They are easily recognised by their spiralled horn
    and flowing mane. Although naturally elusive, they have been domesticated
    for riding and are valued for the restorative properties of their horns.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Unicorns possess a single spiralled horn on the forehead, clooven
        hooves, and a mane that extends from the neck down the back to a ox-like
        tail. Their coats occur in various colours, including white, grey,
        chestnut, and black. They emit a faint, sweet scent, often compared to
        fresh grass or rain.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Wild unicorns inhabit grasslands, forest edges, and open plains of
        Engloria, preferring regions with abundant water and vegetation. They
        are highly alert and avoid populated areas, often retreating into deep
        forests when threatened.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Unicorns are herbivorous grazers that feed on grasses, herbs, flowers,
        and occasionally tree bark during winter. They are known to seek out
        mineral deposits, which contribute to the health and growth of their
        horns.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Wild unicorns are shy and solitary, forming small groups only during
        breeding seasons. They are wary of humans and most predators, relying on
        speed and concealment for defence. Unicorns breed once every two years.
        Courtship involves displays of strength and horn clashing between males,
        followed by a prolonged period of grooming and companionship between the
        pair. Gestation lasts about a year, producing a single foal. Foals are
        born with a small nub of horn that begins to spiral within months.
        Mothers are protective and rear their young alone until maturity at
        around four years of age.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Unicorns have been domesticated by Englorians for use as mounts and
        ceremonial animals. Selective breeding has produced calmer and more
        vibrant-coated varieties suited for riding. Their horns are ethically
        harvested from natural shedding, providing a sustainable source of
        medicinal material.
      </p>
    </Body>
  </>
);

export const Unicorn: WikiContent = {
  id: WikiId.Unicorn,
  category: WikiCategory.Fauna,
  title: "Unicorn",
  blurb:
    "Unicorns are large, hoofed mammals native to the temperate meadows and woodlands of Engloria.",
  summary,
  main: content,
};
