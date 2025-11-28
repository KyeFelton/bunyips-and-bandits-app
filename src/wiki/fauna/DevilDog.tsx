import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The devil dog is a carnivorous marsupial native to the forests and savannahs
    of Downunda. Known for its powerful build, disturbing vocalisations, and
    pack-based hunting behaviour, the species is among the continent's most
    formidable nocturnal predators. Its use of sonic sorcery to disorient prey
    distinguishes it from other natural hunters.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Devil dogs are medium-sized marsupials standing around 1m at the
        shoulder, with compact, muscular bodies and short, thick limbs. Their
        fur is coarse and black, sometimes with white markings along the chest
        and flanks. They emit a strong, musky odour, particularly noticeable
        during feeding or aggression displays. The head is broad with powerful
        jaws capable of crushing bone. Devil dogs are best known for their
        piercing screeches and cackling calls, which can be heard over long
        distances.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Devil dogs inhabit a range of environments across Downunda, including
        forests, grasslands, and open savannahs. They prefer areas with access
        to burrows or rocky shelters where they can establish communal dens.
        These dens are large, complex tunnel systems used for resting, rearing
        young, and sheltering from the heat of the day. They are primarily
        nocturnal, emerging at dusk to hunt.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        As opportunistic carnivores and scavengers, devil dogs consume a wide
        range of prey, from small marsupials to large herbivores. They use
        coordinated pack tactics to bring down animals several times their size,
        and are capable of stripping a carcass to the bone within minutes. Their
        strong digestive systems allow them to consume bones and sinew as well
        as flesh.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Devil dogs are social animals that live and hunt in tightly coordinated
        packs. They communicate through a series of loud screeches, growls, and
        unsettling laughter-like calls that serve both to coordinate attacks and
        intimidate potential threats. They can also project concussive or
        disorienting bursts of noise, stunning prey before the pack descends to
        feed. Within the pack, dominance hierarchies are established through
        vocal contests rather than physical combat. During daylight hours, packs
        rest together in their dens, often emerging only at dusk.
      </p>
    </Body>
  </>
);

export const DevilDog: WikiContent = {
  id: WikiId.DevilDog,
  category: WikiCategory.Fauna,
  title: "Devil Dog",
  blurb:
    "The devil dog is a carnivorous marsupial native to the forests and savannahs of Downunda.",
  summary,
  main: content,
};
