import { useToast } from "./../utils/use-toast";
import { playDiceRollSound } from "./../utils/sound";
import { RollText } from "./RollText";
import { useAtom } from "jotai";
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
  const [criticalSuccesses, setCriticalSuccesses] = useAtom(
    criticalSuccessesAtom
  );
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

    // Track critical success
    if (isCriticalSuccess && !alreadyProgressed) {
      const currentCrits = criticalSuccesses[type] || 0;
      const newCrits = currentCrits + 1;

      setCriticalSuccesses({
        ...criticalSuccesses,
        [type]: newCrits,
      });
      // Mark this skill as progressed since rest
      setSkillsProgressedSinceRest(
        new Set([...skillsProgressedSinceRest, type])
      );
    }

    setTimeout(
      () =>
        toast({
          title: name,
          description: (
            <div className="font-mono space-y-1">
              <div className="">
                <span className="text-xl font-bold">{roll}</span>
                {isCriticalSuccess && (
                  <span className="ml-2 text-sm">Critical!</span>
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
