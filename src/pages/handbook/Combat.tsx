import { Body, H2, H3, WikiPage } from "../../components/WikiPage";
import dropbearImage from "../../images/handbook/dropbear.png";

const main = (
  <>
    <H2>Combat</H2>
    <Body>
      <p>
        Sometimes, words fail. And when they do, there's always combat. Combat
        can be initiated by anyone, including the GM. When a battle takes place,
        combat rules are applied.
      </p>
      <div className="md:w-[35%] md:float-right px-6 bg-card">
        <img
          src={dropbearImage}
          alt={"dropbear fighter"}
          className="object-contain rounded-lg mt-0"
        />
      </div>
      <p>
        Combat follows a structured turn-based system, but it's intended to be
        quick and flexible, encouraging creativity. The party that initiated the
        combat acts first, and then the opposing party goes next. Player turns
        go clockwise around the table, while the GM controls enemies on their
        turn. Each round represents about 5 seconds in the game world.
      </p>
    </Body>
    <H3>Actions</H3>
    <Body>
      <p>
        On their turn, each character may perform as many actions as specified
        by the action count on their character sheet. Most characters can
        perform two actions per turn, but some may be able to perform more or
        less based on their traits and items. Actions may incur damage, inflict
        statuses, or provide buffs.
      </p>
      <p>
        Every character has a list of actions that they have mastered, and can
        unlock more as they develop. You can perform the actions you've learnt
        on your turn, or you can get creative and try something different. For
        example, you could try burning a bridge before your opponent crosses, or
        lasso a charging creature with your rope. In that case, describe your
        action to the GM and make a skill check to see if you succeed on it. GM
        will decide the outcome of your action based on your description and
        skill check result.
      </p>
      <p>
        Some actions cost stamina, while others don't. Be mindful—if you burn
        through all your stamina, you might find yourself too exhausted to fight
        when it really matters.
      </p>
      <h4 className="font-bold mt-4 mb-2">Basic Actions</h4>
      <p>
        All characters can perform these basic actions without needing to unlock
        them:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <b>Brawl</b> - You strike your opponent with your fists to deal 1
          force damage.
        </li>
        <li>
          <b>Dash</b> - Move at one speed tier higher than normal. Slow
          creatures reach close distance, moderate reach near, and fast reach
          far. Costs 1 stamina.
        </li>
      </ul>
    </Body>
    <H3>Movement</H3>
    <Body>
      <p>
        Moving is a basic action available to all characters. The distance you
        can reach in one turn is determined by your speed rating for the
        locomotion type you're using (walk, swim, climb, or fly). To move
        faster, use the Dash action, which costs 1 stamina and moves you one
        speed tier higher (see Speed section).
      </p>
      <p>
        Some terrain slows movement (mud, dense bush), while others make it
        risky (unstable bridges, slippery surfaces). The GM will let you know if
        the ground under your feet is about to betray you.
      </p>
    </Body>
    <H3>Range and area of effect</H3>
    <Body>
      <p>
        An action may specify a range, which determines how far the target point
        can be located. To target a location or creature, it must be within your
        perception:
      </p>
      <table className="md:mx-4">
        <thead>
          <tr>
            <th>Range</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Close</b>
            </td>
            <td>Within 2m</td>
          </tr>
          <tr>
            <td>
              <b>Near</b>
            </td>
            <td>Within 10m</td>
          </tr>
          <tr>
            <td>
              <b>Far</b>
            </td>
            <td>Within 50m</td>
          </tr>
        </tbody>
      </table>
      <p>
        Some actions can also hit multiple targets. An action's area of effect
        determines the maximum size of the area that targets can be affected by
        the action:
      </p>
      <table className="md:mx-4">
        <thead>
          <tr>
            <th>Area Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Close area</b>
            </td>
            <td>Affects a close-sized area from the target point</td>
          </tr>
          <tr>
            <td>
              <b>Near area</b>
            </td>
            <td>Affects a near-sized area from the target point</td>
          </tr>
          <tr>
            <td>
              <b>Far area</b>
            </td>
            <td>Affects a far-sized area from the target point</td>
          </tr>
        </tbody>
      </table>
      <p>
        When using an action with an area of effect, the caster chooses the
        shape of the affected area (such as a circle, cone, line, or square).
        The shape must be regular and enclosed. All creatures within that area
        are affected, including both allies and foes. The size of the shaped
        area cannot exceed the maximum size specified by the action's area of
        effect.
      </p>
      <p>
        Obstructions can block attacks—if a wall, tree, or sturdy shield is in
        the way, the GM may rule that your action doesn't hit as expected.
      </p>
      <p>
        Hidden enemies can't be directly targeted, but they can be hit by area
        of effects if you're lucky enough to guess their location.
      </p>
    </Body>
    <H3>Hitting a target</H3>
    <Body>
      <p>
        Landing an attack isn't always guaranteed—opponents can counter, dodge
        or resist attacks:
      </p>
      <ul className="list-disc ml-4">
        <li>
          <b>Counter</b>: The defender rolls the same skill check as the
          attacker to counter the attack.
        </li>
        <li>
          <b>Dodge</b>: If the attack is physical and doesn't cover a large
          area, the defender can roll an agility check to dodge it.
        </li>
        <li>
          <b>Resist</b>: If it is a psychic attack, the defender can roll a
          willpower check to resist the effect.
        </li>
      </ul>
      <p>
        If the attacker rolls higher than the defender, the attack hits and the
        defender takes the effect of the action. If the defender rolls equal to
        or higher, they avoid the attack.
      </p>
      <p>
        Every character has an evasions count on their character sheet. The
        evasions count determines the number of attacks they can attempt to
        evade in one round of combat. Characters start off with an evasion count
        of 1, but can increase it with some traits and items.
      </p>
    </Body>
    <H3>Statuses</H3>
    <Body>
      <p>
        Some actions inflict statuses upon their foes. All statuses, except for
        burning, last only one round.
      </p>
      <table className="md:mx-4 mb-8">
        <thead>
          <tr>
            <th>Status</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Stunned</b>
            </td>
            <td>
              Loses an evasion until next turn. If no evasions, loses an action.
              Can be stacked.
            </td>
          </tr>
          <tr>
            <td>
              <b>Empowered</b>
            </td>
            <td>Gains an evasion until next turn. Can be stacked.</td>
          </tr>
          <tr>
            <td>
              <b>Protected</b>
            </td>
            <td>
              Armour increases by specified amount/type until next turn. Can be
              stacked.
            </td>
          </tr>
          <tr>
            <td>
              <b>Restrained</b>
            </td>
            <td>Cannot dodge attacks or move until end of next turn.</td>
          </tr>
          <tr>
            <td>
              <b>Burning</b>
            </td>
            <td>
              Takes 1d8 fire damage at start of turn. Can use action to douse
              flame.
            </td>
          </tr>
          <tr>
            <td>
              <b>Invisible</b>
            </td>
            <td>
              Cannot be detected through sight or infrared sight until next
              turn.
            </td>
          </tr>
          <tr>
            <td>
              <b>Silent</b>
            </td>
            <td>
              Cannot be detected through hearing or tremor hearing until next
              turn.
            </td>
          </tr>
          <tr>
            <td>
              <b>Odourless</b>
            </td>
            <td>Cannot be detected through smell until next turn.</td>
          </tr>
          <tr>
            <td>
              <b>Composed</b>
            </td>
            <td>Cannot be detected by psychic sense until end of next turn.</td>
          </tr>
          <tr>
            <td>
              <b>Blinded</b>
            </td>
            <td>
              Cannot see visible or infrared light until end of next turn.
            </td>
          </tr>
          <tr>
            <td>
              <b>Deafened</b>
            </td>
            <td>
              Cannot hear sounds in air or tremors until end of next turn.
            </td>
          </tr>
          <tr>
            <td>
              <b>Anosmic</b>
            </td>
            <td>Cannot smell until end of next turn.</td>
          </tr>
          <tr>
            <td>
              <b>Blocked</b>
            </td>
            <td>Cannot psychic sense until end of next turn.</td>
          </tr>
          <tr>
            <td>
              <b>Disoriented</b>
            </td>
            <td>Blind, deaf, anosmic and blocked.</td>
          </tr>
          <tr>
            <td>
              <b>Deluded</b>
            </td>
            <td>Caster controls perception to alter reality for target.</td>
          </tr>
          <tr>
            <td>
              <b>Hypnotised</b>
            </td>
            <td>
              Target cannot harm caster, must obey commands. Removed if attacked
              by opposing side.
            </td>
          </tr>
          <tr>
            <td>
              <b>Frightened</b>
            </td>
            <td>Immobilised with fear, turn is skipped.</td>
          </tr>
          <tr>
            <td>
              <b>Madness</b>
            </td>
            <td>Can only attack the closest creature.</td>
          </tr>
          <tr>
            <td>
              <b>Provoked</b>
            </td>
            <td>Must use at least one action to attempt to harm the caster.</td>
          </tr>
        </tbody>
      </table>
    </Body>
    <H3>Resolving Combat</H3>
    <Body>
      <p>
        When a character loses all of their physical or mental health, they are
        out of the combat. Once all characters in the same party have been
        defeated or surrender, they lose the combat. The victorious party
        chooses whether to kill, capture or leave the losers in their place. If
        the players lose the combat, it's up to the GM to decide their fate.
      </p>
      <p>
        At any point during their turn, a character can attempt to flee. It is
        up to the GM discretion to determine whether a character has
        successfully fled the combat. If successful, then the character is out
        of the combat and their fate isn't determined by their opponents.
      </p>
    </Body>
  </>
);

export function Combat() {
  return <WikiPage title="Combat" main={main} />;
}
