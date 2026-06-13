import { Callout, WikiPage } from "../../../components/WikiPage";
import dropbearImage from "../../../images/handbook/drop bear.png";
import { getHandbookPageRoute } from "../../../routes";
import { Link } from "react-router-dom";

const main = (
  <>
    <p>When a fight begins, combat rules apply.</p>
    <div className="md:w-[35%] md:float-right px-6 bg-card">
      <img
        src={dropbearImage}
        alt={"dropbear fighter"}
        className="object-contain rounded-lg mt-0"
      />
    </div>
    <p>
      Combat follows a structured turn-based system, intended to be quick and
      flexible. Anyone can initiate combat. The party that initiated the battle
      acts first, and then the opposing party goes next. Player turns go
      clockwise around the table, while the GM controls enemies on their turn.
      Each round represents about five seconds in the game world.
    </p>
    <h2>Actions</h2>
    <p>
      You can do up to three actions on your turn. An action is any quick thing
      your character can realistically do. It may be running to your enemy,
      throwing an axe, or dodging an attack.
    </p>
    <p>
      Some actions have a stamina cost. Performing these action depletes your
      stamina. If the stamina cost is higher than your remaining stamina, you
      cannot do it.
    </p>
    <p>
      Every character has a list of standard actions they can do based on their
      abilities and skills. The actions can be basic, magic or item-based.
    </p>
    <ul className="list-disc ml-6 mb-4">
      <li>
        <b>Basic</b>: Actions common to all humanoid creatures.
        <ul>
          <li>
            <b>Brawl</b>: You strike your opponent with your fists or feet to
            deal 1 force damage.
          </li>
          <li>
            <b>Aim</b>: You focus on hitting your next target. You have
            advantage on your next attack.
          </li>
          <li>
            <b>Assess</b>: You study a target within sight. The GM reveals one
            piece of useful information about it, such as its DR, an armour
            type, or a special trait.
          </li>
          <li>
            <b>Move</b>: You move to a new position. If your speed is medium,
            move a close distance. If fast, move near.
          </li>
          <li>
            <b>Dash</b>: You move further than a standard Move action. Slow
            creatures move a close distance, moderate moves near, and fast moves
            far. Costs 1 stamina.
          </li>
        </ul>
      </li>
      <li>
        <b>Magic</b>: Actions unlocked by levelling up{" "}
        <Link to={getHandbookPageRoute("rules", "characters")}>
          magic skills
        </Link>
        .
      </li>
      <li>
        <b>Item</b>: Actions unlocked by eqipping items.
      </li>
    </ul>
    <p>
      These standard actions are a guide on what you can do, what the
      requirements and what the outcome may be. You don't have to do an action
      from the list. Instead, you can describe an action and your intent to the
      GM. You could try to trip, grapple or disarm an enemy, mount a creature,
      or shout an insult to provoke your foe. Whatever you do, the GM will
      decide whether a check is required, and the outcome based on the situation
      and check result.
    </p>
    <h2>Duration</h2>
    <p>
      Duration defines how long it takes to do an action and how long its effect
      lasts. If no duration is specified, the action is instant. An action with
      a duration of one round lasts from when you begin the action until the
      start of your next turn in combat.
    </p>
    <p>
      To maintain the action, you must focus. While focusing, you can't perform
      any other actions. If you do, or if you lose all your health, you lose
      focus and the effect ends immediately.
    </p>
    <h2>Range and Area of Effect</h2>
    <p>
      An action may specify a range and an area of effect. Range determines how
      far the target point can be located from you. Area of effect determines
      how big of an area the action can impact. You choose the size (not
      exceeding the maximum) and shape (circle, cone or line) of the affected
      area. All things within the area are affected, friend or foe. If range or
      area of effect is not stated, then you can only target a single thing that
      is within reach to you.
    </p>
    <p></p>
    <p>
      Whatever your intended target is, you must be able to detect it with at
      least one of your keen senses. If not, it is hidden from you and cannot be
      targeted directly. You can however guess its location and hope that you
      land the hit. There must also be no obstructions blocking you from the
      intended target in order to hit.
    </p>
    <h2>Movement</h2>
    <p>
      You can move by doing a Move and Dash action. The amount of distance
      traversed is dependent on your speed and action chosen.
    </p>
    <p>
      Some terrain may hinder your movement (mud, dense bush). Other
      environments may include hazards (unstable bridges, slippery surfaces)
      which require a check. The GM should decide and disclose when these
      conditions apply based on the scenario.
    </p>
    <h2>Hitting Your Target</h2>
    <p>
      Most actions are linked to a skill. To use that action, you do a check for
      that skill. If you target an opponet and they attempt to evade, you must
      beat the opponent's{" "}
      <Link to={getHandbookPageRoute("rules", "checks")}>DR</Link> to land the
      hit. If not, any roll above a one succeeds.
    </p>
    <p>
      Rolling more than half your maximum die value is called a strong hit.
      Strong hits deal double damage.
    </p>
    <Callout variant="tip">
      You attempt to Brawl a bandit with a Moderate DR. Your Strength is level
      5, so you roll a d8. If you roll five or above, you succeed a strong hit
      and deal 2 force damage instead of 1. A roll of 4 meets the difficulty and
      hits normally for 1 force damage. A roll of 3 or less misses.
    </Callout>
    <h2>Reactions</h2>
    <p>
      A reaction is a quick response to something that directly affects you.
      Like any action, describe what you do and the GM determines whether a
      check applies.
    </p>
    <p>
      Most often, you use a reaction to evade an attack. Roll the relevant skill
      and meet or beat the attacker's DR to avoid the attack and its effects.
      There are three standard evasions.
    </p>
    <ul className="list-disc ml-4">
      <li>
        <b>Counter</b>: Roll the same skill the attacker used.
      </li>
      <li>
        <b>Dodge</b>: Roll an Agility check. Only works against physical attacks
        that don't cover a large area.
      </li>
      <li>
        <b>Resist</b>: Roll a Willpower check. Only works against psychic
        attacks.
      </li>
    </ul>
    <p>You can also Counter an attack targeting an adjacent ally.</p>
    <p>
      Each reaction costs you one action on your next turn. If all your actions
      are spent on reactions, your next turn is skipped. You can't perform more
      reactions than you have actions.
    </p>
    <h2>Fire</h2>
    <p>
      Flammable objects and creatures can catch fire. Whilst on fire, you take
      one fire damage at the start of your turn. You can spend an action to
      douse the flames and remove the infliction.
    </p>
    <p>
      Fire spreads. If a burning creature moves through flammable terrain or
      makes contact with a flammable object, the GM may rule that the fire
      spreads.
    </p>
    <h2>Stun</h2>
    <p>
      Some actions may stun your opponents. A stunned creature cannot react to
      the next action that targets them. The stun clears after that action
      resolves, whether or not it hits.
    </p>
    <h2>Morale</h2>
    <p>
      Most foes won't fight to the death. When an opponent drops to half their
      health, sees their leader fall, or finds themselves clearly outnumbered,
      they look for a way out. If there's a path to flee, they'll take it. A
      person who is surrounded with no escape will throw down their weapons and
      surrender. A beast will bare its teeth and hold its ground, but won't
      press the attack unless provoked.
    </p>
    <p>
      The GM decides which opponents have wavering morale. It works best for
      common thugs and wild animals, whereas an enemy boss devoted to their
      cause or a creature guarding its young tend not to back out of the fight.
    </p>
    <h2>Resolving Combat</h2>
    <p>
      When a character loses all of their physical or mental health, they are
      out of the combat. Once all characters in the same party have either been
      defeated, fled or surrendered, they lose the combat. The victorious party
      can decide the fate of their opponents that remain. They may kill, capture
      or leave the losers in their place. If you lose the combat, then the GM
      decides your fate.
    </p>
    <p>
      You may attempt to flee the combat. It is up to the GM to determine the
      requirements to successfully flee.
    </p>
  </>
);

export function Combat() {
  return <WikiPage title="Combat" main={main} />;
}
