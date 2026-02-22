import { Body, H2, WikiPage } from "../../../components/WikiPage";
import apothecaryImage from "../../../images/handbook/apothecary.png";

const main = (
  <>
    <Body>
      <p>
        As you step into the game, the GM will present various scenarios and
        challenges along the way. Depending on your decisions and what the GM
        throws at you, you may need to make skill checks. Whether you're trying
        to charm a merchant, track a beast, or break down a locked door, your
        character's skill check determines how well they perform certain tasks.
      </p>
      <div className="md:w-[42%] md:float-right p-6">
        <img
          src={apothecaryImage}
          alt={"apothecary"}
          className="object-contain rounded-lg mt-0"
        />
      </div>
      <h4>When to Roll</h4>
      <p>
        The GM decides when a skill check is needed. Skill checks should be
        reserved for challenging situations where characters are pushing their
        abilities and testing their limits. The GM shouldn't call for rolls on
        easy or mundane tasks where the character would normally succeed at. For
        example, if you say:
      </p>
      <ul className="list-disc ml-4">
        <li>
          <i>"I walk across the room."</i> → No roll needed.
        </li>
        <li>
          <i>"I sprint across a crumbling rope bridge while dodging arrows."</i>{" "}
          → Definitely a roll.
        </li>
      </ul>
      <p>
        The skill you roll depends on how you approach the problem. For example:
      </p>
      <ul className="list-disc ml-4">
        <li>
          Want to intimidate someone? Roll Strength (if you're flexing
          menacingly) or Charisma (if you're going for a more persuasive
          threat).
        </li>
        <li>
          Trying to escape from quicksand? You might roll Agility (to wriggle
          free) or Strength (to brute-force your way out).
        </li>
        <li>
          Performing first aid? That might be Dexterity (for steady hands) and
          Intelligence (for knowing where organs go).
        </li>
      </ul>
      <h4>Determining the Outcome</h4>
      <p>
        To perform a skill check, roll the die that corresponds to your skill
        level and add any modifiers from your species, traits, or items:
      </p>
      <table className="ml-8 mt-0 w-auto text-center border-collapse">
        <thead>
          <tr>
            <th>Level</th>
            <th>Die</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-2</td>
            <td>d4</td>
          </tr>
          <tr>
            <td>3-4</td>
            <td>d6</td>
          </tr>
          <tr>
            <td>5-6</td>
            <td>d8</td>
          </tr>
          <tr>
            <td>7-8</td>
            <td>d10</td>
          </tr>
          <tr>
            <td>9-10</td>
            <td>d12</td>
          </tr>
        </tbody>
      </table>
      <p>
        Your skill level determines which die you roll. Then add any skill
        modifiers you have from your based on your species selection, traits, or
        held items. For example, if you have level 5 strength and a +3 strength
        modifier, you would roll 1d8+3.
      </p>
      <p>
        If you don't have a level for the required skill (such as attempting to
        use a magic skill you haven't unlocked), you cannot perform that action.
      </p>
      <p>
        The GM chooses difficulty rating for the task that feels reasonable.
        Each rating has a target value that needs to be met in order to
        successfully complete the task:
      </p>
      <table className="ml-8 mt-0 w-auto text-center border-collapse">
        <thead>
          <tr>
            <th>Difficulty</th>
            <th>Target</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Easy</td>
            <td>2+</td>
          </tr>
          <tr>
            <td>Moderate</td>
            <td>4+</td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>6+</td>
          </tr>
          <tr>
            <td>Extreme</td>
            <td>10+</td>
          </tr>
        </tbody>
      </table>
      <p>
        If your roll is equal to or greater than the target number, you succeed.
        If not, well, the GM decides what happens next. Failure doesn't always
        mean instant disaster—but it does mean things don't go to plan. Instead
        of breaking down the door, maybe you hurt your shoulder. Instead of
        sneaking past the guards, maybe you step on a creaky floorboard. This is
        where the GM gets to have some fun.
      </p>
      <h4>Advantage and Disadvantage</h4>
      <p>
        Some abilities, traits, or circumstances give you advantage or
        disadvantage on a skill check. When you have advantage, roll your skill
        die twice and use the higher result before adding modifiers. When you
        have disadvantage, roll twice and use the lower result.
      </p>
      <p>
        If you have both advantage and disadvantage on the same roll, they
        cancel out and you roll normally. Multiple sources of advantage don't
        stack—you still only roll twice.
      </p>
    </Body>
    <H2>Luck</H2>
    <Body>
      <p>
        Sometimes, life doesn't come down to skill—it comes down to sheer dumb
        luck. Luck checks are used when an outcome is completely random with no
        skill involved. Does the abandoned shack have treasure or spiders?
        You're running from an enemy and leap off a cliff—does a conveniently
        placed tree branch break your fall?
      </p>
      <p>
        A luck check is a simple d20 roll. Higher rolls mean better outcomes,
        and lower rolls mean things go pear-shaped.
      </p>
    </Body>
  </>
);

export function SkillChecks() {
  return <WikiPage title="Skill Checks" main={main} />;
}
