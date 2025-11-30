import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Amnesia,
  Condition,
  Deluded,
  Frightened,
  Hysteria,
} from "./../models/conditions";
import { useAtom } from "jotai";
import { conditionsAtom } from "./../state/character";
import { useEffect } from "react";
import {
  playHuhSound,
  playLaughSound,
  playScaredSound,
  playTwinkleSound,
} from "../utils/sound";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  condition: Condition;
};

export const ConditionGainedModal = ({ isOpen, onClose, condition }: Props) => {
  const [conditions, setConditions] = useAtom(conditionsAtom);

  useEffect(() => {
    if (isOpen) {
      if (condition === Amnesia) playHuhSound();
      else if (condition === Hysteria) playLaughSound();
      else if (condition === Deluded) playTwinkleSound();
      else if (condition === Frightened) playScaredSound();
    }
  }, [isOpen, condition]);

  const handleClose = () => {
    const existingCount = conditions.filter(
      (c) => c.name === condition.name
    ).length;

    // Check if we can add this condition
    if (condition.stackable === 0 && existingCount > 0) {
      // Non-stackable condition already exists, can't add
      onClose();
      return;
    }

    if (condition.stackable > 0 && existingCount >= condition.stackable) {
      // Already at max stack count
      onClose();
      return;
    }

    setConditions((prev) => [...prev, condition]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center">
            You have gained a condition
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4 text-muted-foreground text-center">
          <div className="text-xl text">
            <i>{condition.name}</i>
          </div>
          <p>{condition.description}</p>
          <p>The condition lasts until you next rest.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
