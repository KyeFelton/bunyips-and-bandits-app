import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Copterworms are large butterfly larvae native to the mountainous regions of
    Shan Guo. They were once widespread across alpine tundra, where they
    consumed low-lying vegetation. Though close extinction in the wild due to
    overharvesting, domesticated populations remain common throughout Shan Guo
    for agricultural and transport uses.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Copterworms possess long, segmented bodies with short, stubby legs and
        four membranous wings surrounding their head. They are about 1 metre in
        length. Their skin is pale and glossy, covered in fine hairs that detect
        air pressure changes. When alarmed, they emit a low hum before launching
        themselves upward with their spinning wings.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        In the wild, copterworms live in the alpine tundra regions of Shan Guo.
        Domesticated varieties are reared in shaded enclosures near villages or
        terraces, where conditions mimic their native environment.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Copterworms are herbivores, feeding on shrubs and grasses. They also
        serve as detritivore that feed on decomposing plant matter, fungi, and
        occasionally carrion.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Naturally shy and non-aggressive, copterworms rely on flight as their
        primary defense, using their wings to lift into the air when threatened.
        Copterworms can live up to ten years, which they spend most of the time
        as larvae. In their final year, they burrow underground and pupate into
        a magnificent butterfly. Their life as a butterfly is short lived, with
        the sole purpose to mate. They reproduce in moist soil, laying clusters
        of eggs that hatch within a few weeks.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        Shan Guo communities have long cultivated copterworms for their unique
        ability to achieve short-distance flight. Domesticated strains are used
        for transporting people and goods vertically up cliffs.
      </p>
    </Body>
  </>
);

export const Copterworm: WikiContent = {
  id: WikiId.Copterworm,
  category: WikiCategory.Fauna,
  title: "Copterworm",
  blurb:
    "Copterworms are large butterfly larvae native to the mountainous regions of Shan Guo.",
  summary,
  main: content,
};
