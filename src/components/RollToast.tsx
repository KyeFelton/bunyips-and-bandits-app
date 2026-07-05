import { useAtom, useSetAtom } from "jotai";
import { SkillType } from "./../enums/SkillType";
import {
  criticalSuccessesAtom,
  skillsProgressedSinceRestAtom,
} from "./../state/character";
import { activeRollAtom } from "./../state/roll";

const rollDice = (sides: number) => {
  return Math.ceil(Math.random() * sides);
};

type RollToastProps = {
  dice: number;
  hasAdvantage?: boolean;
  hasDisadvantage?: boolean;
  modifier: number;
  name: string;
  type: SkillType;
};

export const useRollToast = () => {
  const setActiveRoll = useSetAtom(activeRollAtom);
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

    const isCriticalSuccess = naturalRoll === dice;
    const alreadyProgressed = skillsProgressedSinceRest.has(type);

    if (isCriticalSuccess && !alreadyProgressed) {
      const currentCrits = criticalSuccesses[type] || 0;
      const newCrits = currentCrits + 1;

      setCriticalSuccesses({
        ...criticalSuccesses,
        [type]: newCrits,
      });
      setSkillsProgressedSinceRest(
        new Set([...skillsProgressedSinceRest, type])
      );
    }

    setActiveRoll({
      id: crypto.randomUUID(),
      name,
      type,
      dice,
      modifier,
      hasAdvantage,
      hasDisadvantage,
      naturalRoll1,
      naturalRoll2,
      naturalRoll,
      roll,
      extraText,
      isCriticalSuccess,
    });
  };

  return showRollToast;
};
