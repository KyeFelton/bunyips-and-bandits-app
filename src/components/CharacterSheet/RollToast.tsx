import { useToast } from "../../utils/use-toast";
import { playDiceRollSound } from "../../utils/sound";

const rollDice = (sides: number) => {
  return Math.ceil(Math.random() * sides);
};

interface RollToastProps {
  name: string;
  dice: number;
  modifier: number;
}

export const useRollToast = () => {
  const { toast } = useToast();

  const showRollToast = ({ name, dice, modifier }: RollToastProps) => {
    playDiceRollSound();
    const roll = rollDice(dice);
    const total = roll + modifier;

    setTimeout(
      () =>
        toast({
          title: name,
          description: (
            <div className="font-mono space-y-1">
              <div className="text-xl font-bold">{total}</div>
              <div className="text-xs text-muted-foreground">
                d{dice}{" "}
                {modifier
                  ? modifier >= 0
                    ? `+ ${modifier}`
                    : `- ${Math.abs(modifier)}`
                  : ""}
              </div>
            </div>
          ),
        }),
      200
    );
  };

  return showRollToast;
};
