import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    Glow snails are bioluminescent gastropods native to deep cave systems. Their
    steady, natural light makes them a valued resource, and they have been
    domesticated and farmed extensively by gnomes for illumination and
    sustenance.
  </p>
);

const content = (
  <>
    <h2>Description</h2>

    <p>
      Glow snails possess translucent shells ranging in colour from pale green
      to soft blue, with bodies that emit a continuous bioluminescent glow. The
      light is gentle but steady, sufficient to illuminate tunnels and caverns.
      They move slowly and leave behind a faintly glowing trail of mucus.
    </p>

    <h2>Habit</h2>

    <p>
      Glow snails inhabit damp, dark cave environments rich in moss, fungi, and
      minerals. They are most common near underground streams and gnomish
      settlements where conditions of humidity and temperature are just right.
    </p>

    <h2>Diet</h2>

    <p>
      They feed on cave moss, lichens, and fungal growths. In captivity, they
      are provided with cultivated mosses and mineral supplements to enhance
      shell strength and brightness.
    </p>

    <h2>Behaviour</h2>

    <p>
      Glow snails are slow-moving and docile. They reproduce by laying
      gelatinous egg clusters, which are collected and incubated by gnome
      farmers.
    </p>

    <h2>Domestication</h2>

    <p>
      Gnomes have long domesticated glow snails as light source and as a mild,
      protein-rich food. They are kept in glass enclosures with plenty of food,
      and their light is used to illuminate workshops, tunnels, and dwellings.
      Cooked glow snail flesh is considered a staple in many gnome communities,
      while shells are repurposed as ornaments.
    </p>
  </>
);

export const GlowSnail: WikiContent = {
  id: WikiId.GlowSnail,
  category: WikiCategory.Fauna,
  title: "Glow Snail",
  blurb:
    "Glow snails are bioluminescent gastropods native to deep cave systems.",
  summary,
  main: content,
};
