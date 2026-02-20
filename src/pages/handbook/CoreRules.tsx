import { Body, H2, WikiPage } from "../../components/WikiPage";

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
        This handbook should be viewed as framework to align everyone, rather
        than a rigid rule system. If anything is unclear, discuss it with your
        party and agree on a ruling. If something doesn't quite fit your
        playstyle, discuss that too and potentially tweak it. The game is meant
        to be adaptable. The only rule is that everyone at the table has fun.
      </p>
    </Body>
    <H2>What You'll Need</H2>
    <Body>
      <p>
        Your game setup depends on your style. This website has been created to
        enhance and streamline the playing experience, but it's not required. If
        you prefer a more tactile experience, you can play with paper, pens and
        dice. The game uses polyhedral dice sets, including d4, d6, d8, d12, and
        d20. The GM may also want a board to track character positions in
        combat, but if you're a fan of Theatre of the Mind, let your imagination
        do the work. At the end of the day, all you really need is a good group
        of friends and a sense of adventure.
      </p>
    </Body>
  </>
);

export function CoreRules() {
  return <WikiPage title="Core Rules" main={main} />;
}
