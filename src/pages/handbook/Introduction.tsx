import { Body, TornPaper, WikiPage } from "../../components/WikiPage";
import sleepingWombatInnImage from "../../images/handbook/sleeping wombat inn.png";

const summary = (
  <>
    <p>
      G'day, adventurer! Welcome to Bunyips and Bandits, a tabletop role-playing
      game set in a fantasy world inspired by the landscapes, creatures, and
      legends of Australia. Whether you're trekking through the Outback,
      navigating the waterways of a crocodile-infested billabong, or trading
      stories at a smoky bush pub, adventure is never far away.
    </p>
    <img
      src={sleepingWombatInnImage}
      alt={"sleeping wombat inn"}
      className="md:w-[50%] md:float-right px-6 m-0"
    />
    <p>
      This is a game of cooperative storytelling, where you and your friends
      take on the roles of unique characters, facing challenges set by the Games
      Master (GM)—the one running the world, narrating the scenes, and keeping
      the story moving.
    </p>
    <p>
      As you explore, you'll meet strange and wonderful creatures, stumble into
      unexpected dangers, and have to think on your feet to survive. Your
      choices shape the story, and the dice determine whether things go to plan
      or take a turn for the worse.
    </p>
    <TornPaper>
      <p>
        Bunyips and Bandits draws inspiration from real Australian history,
        culture and landscape. It is not by any means a fair representation of
        Australia, past or present. Australia is a place with a long, deep, and
        ongoing history. For many thousands of years it has been inhabited by
        Aboriginal and Torres Strait Islander peoples. Their cultures are not
        singular, but instead a network of over two hundred nations, each with
        their own language, laws, and stories. Their land was wrongfully seized
        by European invaders, and with it, lives, culture and language have been
        harmed and lost—tragedies whose impacts are still felt today.
      </p>
    </TornPaper>
  </>
);

const main = (
  <>
    <Body>
      <p>
        This handbook is your guide to the world of Bunyips and Bandits. Use
        the sections on the left to navigate the rules, or read from start to
        finish to get the full picture before your first session.
      </p>
    </Body>
  </>
);

export function Introduction() {
  return <WikiPage title="Handbook" summary={summary} main={main} />;
}
