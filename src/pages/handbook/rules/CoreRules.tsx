import { Body, H2, WikiPage } from "../../../components/WikiPage";

const main = (
  <>
    <H2>How the Game Works</H2>
    <Body>
      <p>
        Bunyips and Bandits is all about collaborative storytelling. Before you
        dive into adventure, you'll create your own character with a unique
        background, skills, and motivations. They might be a cunning trickster,
        a brawny bushranger, or a clumsy sorcerer—the choice is yours.
      </p>
      <p>
        The GM is the one pulling the strings—setting up the world, playing
        non-player characters (NPCs), and ensuring the game flows smoothly. The
        GM also acts as the ultimate referee, deciding how events play out based
        on a combination of logic, game rules, and a little bit of storytelling
        flair. The core of the game boils down to this:
      </p>
      <ol className="list-decimal ml-4">
        <li>The GM describes a scene.</li>
        <li>You decide what your character does.</li>
        <li>
          Dice rolls determine whether you pull it off spectacularly, fail
          hilariously, or land somewhere in between.
        </li>
        <li>The story unfolds, shaped by your actions and decisions.</li>
      </ol>
      <p>
        The game is intended to be fast and flexible, designed to keep the
        action moving rather than bogging you down with specific details and
        calculations. The rules encourage creativity—if you want to try
        something ridiculous, the GM won't stop you (although the outcome might
        not be favourable).
      </p>
      <p>
        This handbook should be viewed as a framework to align everyone, rather
        than a rigid rule system. If anything is unclear, discuss it with your
        party and agree on a ruling. If something doesn't quite fit your
        playstyle, discuss that too and potentially tweak it. The game is meant
        to be adaptable. The only rule is that everyone at the table has fun.
      </p>
    </Body>
    <H2>Core Mechanics</H2>
    <Body>
      <p>
        These are the systems you'll use during play. Each is covered in detail
        in the relevant section of the handbook.
      </p>
      <ul className="list-disc ml-4">
        <li>
          <b>Skills.</b> Everything resolves through skill checks—there are no
          separate attribute blocks. Skills are split into physical, mental, and
          magic categories. Magic skills must be unlocked before they can be
          used.
        </li>
        <li>
          <b>Dice ladder.</b> Your skill level determines which die you roll: d4
          at levels 1–2, d6 at 3–4, d8 at 5–6, d10 at 7–8, d12 at 9–10. Rolling
          the maximum on your die is a critical success.
        </li>
        <li>
          <b>Difficulty.</b> The GM sets a target number based on the task. Four
          tiers: Easy (2+), Moderate (4+), Hard (6+), Extreme (10+).
        </li>
        <li>
          <b>Only players roll.</b> NPCs have static difficulty classes. When an
          NPC attacks you, you roll to evade. When you attack, you roll to hit.
          The GM never rolls dice.
        </li>
        <li>
          <b>Advantage and disadvantage.</b> Roll your die twice and keep the
          higher (advantage) or lower (disadvantage) result. Multiple sources
          don't stack, and one of each cancels out.
        </li>
        <li>
          <b>Progression.</b> No experience points or milestones. Two critical
          successes with the same skill levels it up by one—capped at once per
          rest. Skills cap at level 10.
        </li>
        <li>
          <b>Health.</b> Three independent tracks: Body (physical resilience),
          Mind (mental fortitude), and Stamina (resource for costly actions).
        </li>
        <li>
          <b>Action economy.</b> Each turn you have two actions and one evasion.
          You can forgo one action to gain an extra evasion for that round.
        </li>
        <li>
          <b>Initiative.</b> No roll. The side that starts the fight acts first.
          Player turns go clockwise around the table. Each round represents
          roughly 5 seconds.
        </li>
      </ul>
    </Body>
  </>
);

export function CoreRules() {
  return <WikiPage title="Core Rules" main={main} />;
}
