import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The sunmu is a large, flightless bird native to the deserts and grasslands
    of Downunda. It is recognised by its distinctive feathered mane and its
    ability to emit bursts of light to deter predators. While wild populations
    are common, the species has also been semi-domesticated by the Dharrigal
    people for their eggs, meat, and feathers.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Sunmus stand between 1.5 and 2 metres tall, with long legs adapted for
        endurance running across open terrain. Their bodies are covered in
        coarse, grey-brown feathers that blend with the arid environment, while
        their necks and heads are lightly feathered. A dense mane of long
        feathers runs around the neck. When relaxed, the feathers lie flat, but
        when threatened, they fan outward in a striking display. Sunmus can
        release a sudden flash of intense light from specialized reflective
        plumage within the mane, temporarily stunning predators.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Sunmus inhabit open plains, semi-arid deserts, and grasslands across
        Downunda. They favour regions with scattered scrub or low trees for
        shade and nesting. Wild groups are nomadic, roaming in search of water
        and vegetation, while domesticated populations live near Dharrigal
        settlements and waterholes.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Omnivorous in diet, sunmus feed mainly on grasses, seeds, fruits, and
        small insects. They use their strong legs and claws to dig for roots and
        tubers during dry periods. Domesticated sunmus are often fed cultivated
        grains and scraps.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Sunmus are generally peaceful and social, forming loose flocks of up to
        a dozen individuals. They are diurnal, relying on their keen eyesight to
        spot threats. When threatened, they raise their feather manes and emit
        flashes of light before fleeing at high speed. Breeding pairs construct
        ground nests and share incubation duties. Chicks are precocial and
        capable of running shortly after hatching.
      </p>
    </Body>

    <H2>Domestication</H2>
    <Body>
      <p>
        The Dharrigal people have semi-domesticated the sunmu for its large,
        nutritious eggs and lean meat. Feathers from the mane are also used for
        ceremonial attire and trade. Domesticated flocks are kept near camps or
        along migratory routes and are herded similarly to livestock.
      </p>
    </Body>
  </>
);

export const Sunmu: WikiContent = {
  id: WikiId.Sunmu,
  category: WikiCategory.Fauna,
  title: "Sunmu",
  blurb:
    "The sunmu is a large, flightless bird native to the deserts and grasslands of Downunda.",
  summary,
  main: content,
};
