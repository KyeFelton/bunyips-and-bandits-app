import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Qilin are large, scaled quadrupeds domesticated by the Longren, primarily
    used as for riding and hauling. Revered for their calm disposition and
    uncanny intuition, they move with quiet elegance and are frequently
    associated with wisdom and good fortune across Shan Guo.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Qilin possess a lithe, deer-like body covered in iridescent scales that
        shimmer in gold, jade, and pearl hues. They have elongated necks,
        delicate whisker-tendrils, and sweeping manes. A single antler rises
        from the brow. Their eyes are large and reflective, giving them a
        serene, contemplative expression. When in motion, soft motes of light or
        faint mist often trail behind them, contributing to their mystical
        reputation.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Qilin are found within the mountainous highlands and mist-veiled valleys
        of Shan Guo. They prefer temperate slopes rich with vegetation and clean
        springs.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Primarily herbivorous, qilin graze on grasses, flowering shrubs, and
        mineral-rich mountain herbs. They are particularly fond of dew-fed
        vegetation and have access to curated pastures in Longren settlements.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Qilin are tranquil, intelligent, and deeply loyal once bonded. They
        respond to gentle handling and subtle cues, often seeming to anticipate
        their rider's intent. Natural pacifists, they rarely resort to
        aggression, instead warding off threats with sharp vocalisations, sudden
        displays of light, or powerful leaps to disengage. Breeding is selective
        and overseen by respected Longren caretakers, who ensure lineage,
        temperament, and grace remain pure.
      </p>
    </Body>
  </>
);

export const Qilin: WikiContent = {
  id: WikiId.Qilin,
  category: WikiCategory.Fauna,
  title: "Qilin",
  blurb:
    "Qilin are large, scaled quadrupeds domesticated by the Longren, primarily used as for riding and hauling.",
  summary,
  main: content,
};
