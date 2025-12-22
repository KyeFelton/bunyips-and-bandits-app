import { useToast } from "./../utils/use-toast";
import { playDiceRollSound } from "./../utils/sound";
import { RollText } from "./RollText";
import { useAtom, useSetAtom } from "jotai";
import {
  criticalSuccessesAtom,
  skillsProgressedSinceRestAtom,
} from "./../state/character";
import { SkillType } from "./../enums/SkillType";

const rollDice = (sides: number) => {
  return Math.ceil(Math.random() * sides);
};

interface RollToastProps {
  dice: number;
  hasAdvantage?: boolean;
  hasDisadvantage?: boolean;
  modifier: number;
  name: string;
  type: SkillType;
}

export const useRollToast = () => {
  const { toast } = useToast();
  const setCriticalSuccesses = useSetAtom(criticalSuccessesAtom);
  const [skillsProgressedSinceRest, setSkillsProgressedSinceRest] = useAtom(
    skillsProgressedSinceRestAtom
  );

  const showRollToast = ({
    dice,
    hasAdvantage,
    hasDisadvantage,
    modifier,
    name,
    type,
  }: RollToastProps) => {
    playDiceRollSound();

    const naturalRoll1 = rollDice(dice);
    const naturalRoll2 = rollDice(dice);
    const roll1 = naturalRoll1 + modifier;
    const roll2 = naturalRoll2 + modifier;
    let roll = roll1;
    let naturalRoll = naturalRoll1;
    let extraText = "";

    if (hasDisadvantage && !hasAdvantage) {
      roll = Math.min(roll1, roll2);
      naturalRoll = roll === roll1 ? naturalRoll1 : naturalRoll2;
      extraText = ` (${roll1}, ${roll2})`;
    } else if (hasAdvantage && !hasDisadvantage) {
      roll = Math.max(roll1, roll2);
      naturalRoll = roll === roll1 ? naturalRoll1 : naturalRoll2;
      extraText = ` (${roll1}, ${roll2})`;
    }

    // Check for critical success
    const isCriticalSuccess = naturalRoll === dice;

    // Check if skill has already progressed since rest
    const alreadyProgressed = skillsProgressedSinceRest.has(type);

    // Track critical success (only if not already progressed since rest)
    let progressBlocked = false;
    if (isCriticalSuccess && !alreadyProgressed) {
      setCriticalSuccesses((prev) => {
        const currentCrits = prev[type] || 0;
        const newCrits = currentCrits + 1;

        return {
          ...prev,
          [type]: newCrits,
        };
      });
      // Mark this skill as progressed since rest
      setSkillsProgressedSinceRest(new Set([...skillsProgressedSinceRest, type]));
    } else if (isCriticalSuccess && alreadyProgressed) {
      progressBlocked = true;
    }

    setTimeout(
      () =>
        toast({
          title: name,
          description: (
            <div className="font-mono space-y-1">
              <div className="">
                <span
                  className={`text-xl font-bold ${isCriticalSuccess ? "text-yellow-500" : ""}`}
                >
                  {roll}
                </span>
                {isCriticalSuccess && !progressBlocked && (
                  <span className="ml-2 text-sm text-yellow-500">
                    Critical!
                  </span>
                )}
                {progressBlocked && (
                  <span className="ml-2 text-sm text-muted-foreground">
                    Critical! (Already progressed - rest required)
                  </span>
                )}
                {extraText && (
                  <span className="text-lg text-muted-foreground">
                    {extraText}
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                <RollText
                  dice={dice}
                  hasAdvantage={hasAdvantage}
                  hasDisadvantage={hasDisadvantage}
                  modifier={modifier}
                />
              </div>
            </div>
          ),
        }),
      200
    );
  };

  return showRollToast;
};
