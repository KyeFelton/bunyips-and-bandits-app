import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The salavar is a colossal, draconic reptile that dwells within volcanic
    environments. It is one of the most formidable predators of Rajakha and the
    Fireridge Islands, thriving in conditions of extreme heat and molten rock.
    Salavars are known for their immense size, territorial aggression, and
    affinity for lava pools.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Salavars are massive lindwurms, ranging from 10-20m in length. Their
        thick, scaled hides display colours from deep crimson to sulphur green,
        often matching the hue of their volcanic surroundings. Their eyes glow
        with an inner fire, the intensity of which they can adjust to intimidate
        rivals or threats. The salavar's tongue, extending up to fifteen metres,
        is prehensile and tipped with a hardened barb used to capture prey and
        drag it toward its jaws. When agitated, the creature's breath vents
        steam and trace amounts of sulphurous gas.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Salavars inhabit active volcanoes and subterranean magma pools,
        particularly in Rajakha and the Fireridge Islands. They rest within lava
        tubes or near molten chambers, occasionally surfacing to bask on
        volcanic rock. They are rarely seen outside these regions, as their
        physiology depends on the intense heat of volcanic environments.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Salavars feed primarily on organisms adapted to volcanic ecosystems,
        including fire-resistant crustaceans, magma worms, and other thermal
        fauna found in lava pools. They also scavenge and opportunistically prey
        upon any smaller creatures that stray into their domain. Their internal
        heat allows them to digest molten minerals and semi-liquid rock matter.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Salavars are solitary and fiercely territorial. Each individual
        maintains dominance over a single lava pool, which it defends from
        intruders with displays of heat and glowing eyes. They are ambush
        predators, remaining submerged beneath molten rock until potential prey
        approaches, then striking rapidly with their extended tongue. Mating
        rituals are rare and often violent, with pairs only meeting briefly
        before returning to isolation. Salavars are long-lived and rarely leave
        their volcanic homes.
      </p>
    </Body>
  </>
);

export const Salavar: WikiContent = {
  id: WikiId.Salavar,
  category: WikiCategory.Fauna,
  title: "Salavar",
  blurb:
    "The salavar is a colossal, draconic reptile that dwells within volcanic environments.",
  summary,
  main: content,
};
