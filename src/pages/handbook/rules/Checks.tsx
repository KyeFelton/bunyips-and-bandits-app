import { StatBlock } from "../../../components/StatBlock";
import { Callout, WikiPage } from "../../../components/WikiPage";
import { CreatureSize } from "../../../enums/CreatureSize";
import { DamageType } from "../../../enums/DamageType";
import { Locomotion } from "../../../enums/Locomotion";
import { SenseType } from "../../../enums/SenseType";
import { SkillType } from "../../../enums/SkillType";
import { SpeedRating } from "../../../enums/SpeedRating";
import apothecaryImage from "../../../images/handbook/apothecary.png";

const main = (
  <>
    <p>
      As you step into the game, the GM will present various scenarios and
      challenges along the way. Depending on your decisions and what the GM
      throws at you, you may need to make a check.
    </p>
    <div className="md:w-[42%] md:float-right p-6">
      <img
        src={apothecaryImage}
        alt={"apothecary"}
        className="object-contain rounded-lg mt-0"
      />
    </div>
    <p>
      The GM decides when a check is needed. Checks should be reserved for
      challenging situations where you are pushing your abilities and
      testing your limits. The GM shouldn't call for rolls on easy or mundane
      tasks where you would normally succeed at.
    </p>
    <ul className="list-disc ml-4">
      <li>
        <i>"I walk across the room."</i> → No roll needed.
      </li>
      <li>
        <i>"I sprint across a crumbling rope bridge while dodging arrows."</i> →
        Definitely a roll.
      </li>
    </ul>
    <p>
      Performing a check involves rolling the die that corresponds to your level
      for the skill that is being checked. If you have modifiers, add them. For
      example, if you want to read the intentions of an NPC, the GM may call for
      a Psychology check. If your Psychology skill is level five with +3
      modifier, then roll 1d8+3.
    </p>
    <p>The skill you roll depends on how you approach the problem.</p>
    <ul className="list-disc ml-4">
      <li>
        Want to intimidate someone? Roll Strength (if you're flexing menacingly)
        or Charisma (if you're psyching them out).
      </li>
      <li>
        Trying to escape a grapple? You might roll Agility (to wriggle free) or
        Strength (to brute-force your way out).
      </li>
      <li>
        Performing first aid? That might be Dexterity (for steady hands) and
        Lore (to know what medicine to use).
      </li>
    </ul>
    <h2>Difficulty Rating</h2>
    <p>
      For each check, the GM chooses a difficulty rating (DR) that feels
      reasonable. Each rating has a target value that needs to be met in order
      to successfully complete the task.
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
          <td>3+</td>
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
      Before any dice hit the table, the GM announces the DR to the party.
      Knowing the target beforehand sets expectations and adds suspense when you
      roll.
    </p>
    <p>
      If your roll value is greater than the target number, you succeed. If
      equal to the target, then you succeed but there is a consequence. If
      lower, than you fail. The exact outcome is up to the GM's discretion.
      Failure doesn't always mean instant disaster, but it does mean things
      don't go to plan.
    </p>
    <Callout variant="tip">
      You're climbing a crumbling cliff face to reach an enemy camp above. The
      GM calls for a Stealth check at Hard difficulty (6+). Your Stealth is
      level 5, so you roll a d8.
      <ul className="list-disc ml-4 mt-2">
        <li>
          <b>Roll 7 or more.</b> You haul yourself up quietly and slip into
          cover before anyone notices.
        </li>
        <li>
          <b>Roll 6.</b> You make it unnoticed, but leave footprints behind.
        </li>
        <li>
          <b>Roll 5 or less.</b> A chunk of rock breaks loose under
          your boot and the noise carries to the campo above. You hear men shouting and dogs barking.
        </li>
      </ul>
    </Callout>
    <p>
      Rolling a one on a check is considered an automatic failure, regardless of
      modifiers or difficulty rating.
    </p>
    <h2>Advantage and Disadvantage</h2>
    <p>
      Some traits, or circumstances give you advantage or disadvantage on a
      check. When you have advantage, roll your skill die twice and use the
      higher result before adding modifiers. When you have disadvantage, roll
      twice and use the lower result.
    </p>
    <p>
      If you have both advantage and disadvantage on the same roll, they cancel
      out and you roll normally. Multiple sources of advantage and disadvantage
      stack.
    </p>
    <h2>Pushed Checks</h2>
    <p>
      Once per session, you can request to push a failed check.
      Pushing a check means you re-roll the check in an attempt to succeed, but if you fail,
      you suffer a more severe consequence decided by the GM. The GM declares the consequence
      before you decide whether to follow through with the push. If the GM is unsure
      what the cost should be, they can reframe the question and ask you 'what are you most
      afraid of will happen if you fail this check?'.
    </p>

    <h2>Perception</h2>
    <p>
      When performing a Perception check, the GM will declare which senses are
      relevant. You may use sight for spotting a hidden creature, hearing for
      detecting faint footsteps, or smell for tracking a scent trail. If your
      proficiency for the applicable skill is keen, you roll normally. If it is
      poor, you roll with disadvantage. If you lack the sense entirely, you
      cannot make the check.
    </p>
    <p>
      The environment also affects perception. A dark cave makes sight checks
      harder unless you have infrared vision. A windy night makes smell checks
      more difficult. The GM may set different DRs for each sense based on
      the situation.
    </p>

    <h2>Group Checks</h2>
    <p>
      Some situations may call for a check from multiple characters to complete a task with a single result. If you are
      assisting each other, such as breaking open a door together
      or persuading an NPC to join you, everyone rolls the check, and the highest value is kept.
      If you are not, such as sneaking pass an enemy as a group, everyone rolls the check,
      and the median value is kept.
    </p>

    <h2>NPC Checks</h2>
    <p>
      The GM does not roll checks for non-playable characters (NPC). Instead, they refer to a
      static DR set for the NPC to keep the game quick. Every NPC has a base DR that indicates
      their general skill level, and may also list additional DRs for specific skills.
    </p>
    <p>
      To resolve a check for the NPC, the GM uses the DR of the specified skill if included,
      otherwise they can refer to the base DR. The
      DRs are not all encompassing, so apply common sense logic. For example, many animals may have a base DR of Moderate,
      but being animals, do not have Lore. Magic skills also need to be explicilty stated to be usable.
    </p>
    <p>
      The NPC succeeds the check if their DR beats the DR of the required task, succeed with a consequence if equal,
      and fail if less. If you oppose the NPC, then you must perform a check against their DR to determine if you succeed.
    </p>
    <div className="flex flex-col md:flex-row gap-4 items-start">
      <Callout variant="tip" className="my-0">
        <p className="mt-0">
          You attempt to sneak past a lurking crocodile. The GM calls for
          a Stealth check against the crocodile's Perception. The crocodile doesn't
          have a DR for Perception, so the GM uses the crocodile's base Moderate DR.
          Your Stealth is level 2 and you have a +1 bonus from your
          camouflage clothing, so you roll a d4 and add 1 to the result.
        </p>
        <ul className="list-disc ml-4 mt-2">
          <li>
            <b>Roll 4.</b> You make it past the croc unnoticed.
          </li>
          <li>
            <b>Roll 3.</b> You slip past, but the croc senses something was here
            and becomes more alert. Any subsequent attempt to sneak past has disadvantage.
          </li>
          <li>
            <b>Roll 2 or less.</b> The croc spots you and lunges forward.
          </li>
        </ul>
      </Callout>
      <div className="shrink-0">
        <StatBlock
          name="Saltwater Crocodile"
          size={CreatureSize.Large}
          tags={["Beast"]}
          difficulty="Moderate"
          health={12}
          speed={{
            [Locomotion.Run]: SpeedRating.Close,
            [Locomotion.Swim]: SpeedRating.Near,
          }}
          senses={{
            [SenseType.Smell]: "Keen",
          }}
          armour={{
            [DamageType.Slash]: 1,
            [DamageType.Force]: 1,
          }}
          skills={{
            [SkillType.Strength]: "Hard",
            [SkillType.Agility]: "Easy",
          }}
          actions={[
            {
              name: "Bite",
              skill: SkillType.Strength,
              description: "Deal 3 slash damage.",
            },
            {
              name: "Death Roll",
              skill: SkillType.Strength,
              description:
                "Grapple the target. They take 2 slash damage at the start of each turn until they break free with a Hard Strength check.",
            },
          ]}
          traits={[
            {
              name: "Ambush Predator",
              description:
                "Gains advantage on attacks while submerged or emerging from water.",
            },
          ]}
        />
      </div>
    </div>
    <h2>Skill Progression</h2>
    <p>
      As you adventure, your character improves through practice and experience.
      Each time you perform a skill check and roll the maximum value on your die
      (a critical success), you level up your skill. Each skill can level up at
      most once per rest, so subsequent critical successes before resting
      do not increase the skill level.
    </p>

    <h2>Luck</h2>
    <p>
      Some events come to down to pure randomness with no skill involved. Does
      the abandoned shack have treasure or spiders? Does a conveniently placed
      tree branch break your fall? In these scenarios, the GM may call for a
      luck check.
    </p>
    <p>
      To perform a luck check, roll a d6. The GM determines the outcome based on
      the result.
    </p>
    <table className="ml-8 mt-0 w-auto text-center border-collapse">
      <thead>
        <tr>
          <th>Roll</th>
          <th>Outcome</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-2</td>
          <td>Goes against you</td>
        </tr>
        <tr>
          <td>3-4</td>
          <td>Partially in your favour with a problem</td>
        </tr>
        <tr>
          <td>5-6</td>
          <td>Goes in your favour</td>
        </tr>
      </tbody>
    </table>
  </>
);

export function Checks() {
  return <WikiPage title="Checks" main={main} />;
}
