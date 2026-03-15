import { Callout, WikiPage } from "../../../components/WikiPage";
import { StatBlock } from "../../../components/StatBlock";
import { CreatureSize } from "../../../enums/CreatureSize";
import { Locomotion } from "../../../enums/Locomotion";
import { SenseType } from "../../../enums/SenseType";
import { SkillType } from "../../../enums/SkillType";
import { SpeedRating } from "../../../enums/SpeedRating";

const main = (
  <>
    <p>
      The rules describe what players do. This section is for you. Your job is
      to bring the world to life, set the stakes, and respond to whatever your
      players do. When the rules are silent, make a call and keep moving.
    </p>

    <h2>NPC Stat Blocks</h2>
    <p>
      Every NPC and creature has a stat block. Stat blocks are intentionally
      minimal. Only the stats that meaningfully define that NPC are listed. If
      something is missing, fill it in based on what the creature is.
    </p>
    <p>
      Take a human bandit. Their stat block lists a walk speed, sight, and
      hearing, but nothing more about movement or senses. That is not an
      oversight. It means those unlisted stats are unremarkable. An ordinary
      person swims poorly, cannot scale a sheer wall, and has no particularly
      keen sense of smell. The bandit's defining traits are in the block. The
      rest is implied.
    </p>

    <div className="flex flex-wrap gap-4 mb-4 items-start">
      <StatBlock
        name="Scrub Bandit"
        size={CreatureSize.Medium}
        tags={["Humanoid"]}
        difficulty="Easy"
        health={8}
        speed={{ [Locomotion.Walk]: SpeedRating.Moderate }}
        senses={{ [SenseType.Sight]: "Keen", [SenseType.Hearing]: "Keen" }}
        actions={[
          {
            name: "Knife Slash",
            skill: SkillType.Dexterity,
            description:
              "Slashes at a target within close range. Deals 1d4 slash damage.",
          },
          {
            name: "Threaten",
            skill: SkillType.Charisma,
            description:
              "Intimidates a target within near range. On a failed Willpower check, the target is Frightened.",
          },
        ]}
      />
    </div>

    <Callout variant="tip">
      When a stat is missing, ask yourself what the creature is. The answer
      usually tells you what that stat should be.
    </Callout>

    <h2>Difficulty Rating</h2>
    <p>
      Every stat block has an overall DR. This is the target number for any
      check a player makes when opposing the NPC, regardless of what they are
      attempting.
    </p>
    <p>
      If the players want to grapple and restrain a Hard enemy, they make a Hard
      Strength check. If they want to deceive that same enemy, they make a Hard
      Charisma check. If they want to sneak past it, a Hard Stealth check. The
      DR is the catch-all for anything the players throw at an NPC.
    </p>
    <p>
      Some stat blocks list individual skills with their own ratings. When a
      skill has a specific rating listed, use that instead of the overall DR. A
      bandit might be Easy overall but Hard on Perception if they are keeping
      close watch. A troll might be Hard overall but Easy on Willpower if they
      are not particularly sharp.
    </p>

    <h2>Magic</h2>
    <p>
      By default, NPCs and monsters do not have magic skills. Magic is not
      common in this world, and its absence is the norm. Most creatures fight,
      bite, grapple, and threaten.
    </p>
    <p>
      Unless a magic skill appears explicitly in the stat block, the NPC cannot
      use it. A sorcerer, a cursed idol, or a corrupted bunyip might have
      Psychic or Biotic listed. If so, the stat block will say so and describe
      what they can do. Do not improvise magic for an NPC that does not have it
      listed.
    </p>
  </>
);

export function RunningTheGame() {
  return <WikiPage title="Running the Game" main={main} />;
}
