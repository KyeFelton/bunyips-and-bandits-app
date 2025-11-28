import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The bee turtle is a species of tortoise native to the forests of Engloria,
    notable for its symbiotic relationship with black bees. The bees inhabit the
    turtle's shell, forming a living hive that benefits both species through
    mutual protection and access to resources.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Bee turtles possess a domed, honeycombed shell with natural cavities
        that the bees use to construct hives. The shell's pattern often features
        yellow and brown tones resembling a honeycomb. The turtle has a blunt
        head, dark eyes, and thick limbs adapted for slow but steady travel
        through dense forest terrain. A mild hum can usually be heard emanating
        from within its shell due to bee activity.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Bee turtles are found in the temperate forests and grasslands of
        Engloria, where flowering plants are abundant. They follow seasonal
        bloom cycles, migrating slowly through a region to ensure a constant
        food supply for their bees. They prefer shaded, humid environments and
        often rest near ponds or fallen logs.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Bee turtles are herbivores, feeding primarily on grasses, leaves and
        fallen fruit. The bees feed on nectar collected from flowers encountered
        along the turtle's path. Both species benefit from this arrangement, as
        the turtle's movements help pollinate plants throughout the forest.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Bee turtles are solitary, docile and slow-moving. When threatened by
        predators, the bees swarm out from the shell to defend the tortoise,
        delivering multiple stings that deter most attackers. The tortoise
        responds by withdrawing fully into its shell. Bee turtles mate during
        the warm months, with males competing gently for access to females
        through shell-bumping and scent displays. After mating, females lay
        small clutches of eggs in shallow forest soil. Hatchlings emerge after
        several weeks and attract bee colonies within their first year of life.
        The bond between turtle and hive forms gradually, with bees establishing
        permanent residence as the turtle matures.
      </p>
    </Body>
  </>
);

export const BeeTurtle: WikiContent = {
  id: WikiId.BeeTurtle,
  category: WikiCategory.Fauna,
  title: "Bee Turtle",
  blurb:
    "The bee turtle is a species of tortoise native to the forests of Engloria, notable for its symbiotic relationship with black bees.",
  summary,
  main: content,
};
