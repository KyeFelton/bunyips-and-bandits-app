import { useToast } from "./../utils/use-toast";
import { playDiceRollSound } from "./../utils/sound";
import { RollText } from "./RollText";

const rollDice = (sides: number) => {
  return Math.ceil(Math.random() * sides);
};

interface RollToastProps {
  dice: number;
  hasAdvantage?: boolean;
  hasDisadvantage?: boolean;
  modifier: number;
  name: string;
}

export const useRollToast = () => {
  const { toast } = useToast();

  const showRollToast = ({
    dice,
    hasAdvantage,
    hasDisadvantage,
    modifier,
    name,
  }: RollToastProps) => {
    playDiceRollSound();

    const roll1 = rollDice(dice) + modifier;
    const roll2 = rollDice(dice) + modifier;
    let roll = roll1;
    let extraText = "";

    if (hasDisadvantage && !hasAdvantage) {
      roll = Math.min(roll1, roll2);
      extraText = ` (${roll1}, ${roll2})`;
    } else if (hasAdvantage && !hasDisadvantage) {
      roll = Math.max(roll1, roll2);
      extraText = ` (${roll1}, ${roll2})`;
    }

    setTimeout(
      () =>
        toast({
          title: name,
          description: (
            <div className="font-mono space-y-1">
              <div className="">
                <span className="text-xl font-bold">{roll}</span>
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
