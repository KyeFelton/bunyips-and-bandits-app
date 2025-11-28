import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Tree-legged spiders are colossal arboreal arachnids with slender,
    branch-like limbs that allow them to blend seamlessly into the forest
    canopy. Masters of ambush, they remain motionless among branches until prey
    wanders beneath, then strike with venomous precision.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        These spiders have elongated, bark-textured legs that resemble tree
        branches, often covered with moss and lichen patterns to aid their
        camouflage. Their bodies are compact and rounded, coloured in shades of
        brown and dark green. Females dwarf males and build the highest canopy
        lairs, while smaller males range lower in the trees or remain hidden.
        Their long legs allow them to span between branches like part of the
        tree itself, motionless until the moment they attack.
      </p>
    </Body>

    <H2>Habitat</H2>
    <Body>
      <p>Tree-legged spiders are native to the forests of Downunda.</p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Tree-legged spiders hunt by suspension and silent stillness, waiting
        overhead before dropping or lunging onto animals below. Their venom
        quickly paralyses prey and begins breaking down tissue, allowing them to
        feed efficiently.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        They are solitary and territorial, marking their arboreal ranges with
        silk strands so thin they resemble stray vines. They sway with the wind
        to enhance their disguise. While they rarely descend to the ground,
        legends tell of ancient individuals stalking whole clearings like moving
        thickets.
      </p>
    </Body>
  </>
);

export const TreeLeggedSpider: WikiContent = {
  id: WikiId.TreeLeggedSpider,
  category: WikiCategory.Fauna,
  title: "Tree-legged Spider",
  blurb:
    "Tree-legged spiders are colossal arboreal arachnids with slender, branch-like limbs that allow them to blend seamlessly into the forest canopy.",
  summary,
  main: content,
};
