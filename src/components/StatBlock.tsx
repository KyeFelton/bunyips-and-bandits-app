import { SpeedRating } from "../enums/SpeedRating";
import { Difficulty, NpcStatBlock } from "../models/npc";
import { cn } from "../utils/cn";

type Props = NpcStatBlock & {
  float?: "left" | "right";
};

const difficultyColour: Record<Difficulty, string> = {
  Easy: "text-good",
  Moderate: "text-info",
  Hard: "text-warning",
  Extreme: "text-danger",
};

const floatClasses: Record<"left" | "right", string> = {
  left: "float-left mr-6 mb-4 clear-left",
  right: "float-right ml-6 mb-4 clear-right",
};

export function StatBlock({
  name,
  size,
  tags,
  difficulty,
  health,
  speed,
  senses,
  armour,
  skills,
  actions,
  traits,
  float,
}: Props) {
  const hasStats = health !== undefined;

  const nonNoneSpeeds = speed
    ? Object.entries(speed).filter(([, r]) => r !== SpeedRating.None)
    : [];

  const nonZeroArmour = armour
    ? Object.entries(armour).filter(([, v]) => (v ?? 0) !== 0)
    : [];

  const hasSkills = skills && Object.keys(skills).length > 0;
  const hasActions = actions && actions.length > 0;
  const hasTraits = traits && traits.length > 0;

  return (
    <div
      className={cn(
        "border-2 border-primary text-sm overflow-hidden",
        float ? [floatClasses[float], "w-56"] : "w-full max-w-xs",
      )}
    >
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-4 py-2 text-center">
        <div className="font-bold uppercase tracking-wider leading-tight">
          {name}
        </div>
        {(size || (tags && tags.length > 0)) && (
          <div className="text-xs uppercase tracking-wide opacity-75 mt-0.5">
            {[size, ...(tags ?? [])].join(" · ")}
          </div>
        )}
      </div>

      {/* Health */}
      <div className="bg-secondary/30 divide-y divide-primary/20 leading-snug">
        {/* Difficulty, health */}
        <div className="px-4 py-2 space-y-1">
          <div>
            <span className="font-semibold">Difficulty </span>
            <span className={difficultyColour[difficulty]}>{difficulty}</span>
          </div>

          {hasStats && health !== undefined && (
            <div>
              <span className="font-semibold">Health </span>
              {health}
            </div>
          )}
        </div>

        {/* Speed */}
        {nonNoneSpeeds.length > 0 && (
          <div className="px-4 py-2 flex flex-wrap gap-x-4">
            {nonNoneSpeeds.map(([locomotion, rating]) => (
              <span key={locomotion}>
                <span className="font-semibold">{locomotion} </span>
                {rating}
              </span>
            ))}
          </div>
        )}

        {/* Senses */}
        {senses && Object.keys(senses).length > 0 && (
          <div className="px-4 py-2 flex flex-wrap gap-x-4">
            {Object.entries(senses).map(([sense, rating]) => (
              <span key={sense}>
                <span className="font-semibold">{sense} </span>
                {rating}
              </span>
            ))}
          </div>
        )}

        {/* Armour */}
        {nonZeroArmour.length > 0 && (
          <div className="px-4 py-2 flex flex-wrap gap-x-4">
            <span className="font-semibold">Armour</span>
            {nonZeroArmour.map(([type, value]) => (
              <span key={type}>
                {(value as number) > 0 ? "+" : ""}
                {value} {type}
              </span>
            ))}
          </div>
        )}

        {/* Skills */}
        {hasSkills && (
          <div className="px-4 py-2 space-y-1">
            <div className="flex flex-wrap gap-x-4">
              {Object.entries(skills!).map(([skill, dc]) => (
                <span key={skill}>
                  <span className="font-semibold">{skill} </span>
                  <span className={difficultyColour[dc]}>{dc}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        {hasActions && (
          <div className="px-4 py-2 space-y-2">
            {actions!.map((action) => (
              <p key={action.name} className="m-0">
                <span className="font-semibold italic">{action.name}</span>
                {action.skill && (
                  <span className="text-muted-foreground">
                    {" "}
                    ({action.skill})
                  </span>
                )}
                {" — "}
                {action.description}
              </p>
            ))}
          </div>
        )}

        {/* Traits */}
        {hasTraits && (
          <div className="px-4 py-2 space-y-2">
            {traits!.map((trait) => (
              <p key={trait.name} className="m-0">
                <span className="font-semibold italic">{trait.name}: </span>
                {trait.description}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
