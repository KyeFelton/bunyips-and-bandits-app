import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The thylacat is a large predatory marsupial found in the forests of
    Downunda. It is a solitary apex hunter renowned for its strength, precision,
    and mastery of stealth.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Thylacats are muscular, feline-like marsupials standing approximately
        1.5m tall and weighing up to 300kg. Their bodies are compact and heavily
        built, with short, broad muzzles and forward-facing eyes that provide
        exceptional depth perception. Their most distinctive features are their
        dentition and forelimbs: massive slicing cheek teeth, large incisor-like
        fangs in place of canines, and a retractable thumb claw used to grip or
        disembowel prey. Their fur ranges from grey-brown to golden, often with
        faint stripes or spots for camouflage.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        Thylacats inhabit temperate and tropical forests across Downunda,
        favouring dense vegetation where they can use their stealth to greatest
        effect. They establish territories that include nesting hollows or caves
        for shelter and rearing young. Their distribution is sparse, as each
        mated pair maintains a large hunting range and defends it vigorously
        from intruders.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Entirely carnivorous, thylacats prey on medium to large terrestrial
        animals, including herbivorous marsupials, birds, and occasionally
        people and livestock.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Thylacats are monogamous and form lifelong pairs that hunt cooperatively
        within shared territories. They communicate through low growls, purrs,
        and visual cues. They are ambush predators with the innate ability to
        bend light and sound around themselves, rendering them nearly invisible
        and silent whilst hunting. Pairs raise one or two offspring at a time,
        teaching them hunting techniques before driving them off to establish
        their own ranges. Although rarely encountered, thylacats are considered
        highly dangerous due to their strength, intelligence, and stealth
        abilities.
      </p>
    </Body>
  </>
);

export const Thylacat: WikiContent = {
  id: WikiId.Thylacat,
  category: WikiCategory.Fauna,
  title: "Thylacat",
  blurb:
    "The thylacat is a large predatory marsupial found in the forests of Downunda.",
  summary,
  main: content,
};
