import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import {
  Amnesia,
  Condition,
  Deluded,
  Frightened,
  Hysteria,
} from "./../models/conditions";
import { useSetAtom } from "jotai";
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
  const setConditions = useSetAtom(conditionsAtom);

  useEffect(() => {
    if (isOpen) {
      if (condition === Amnesia) playHuhSound();
      else if (condition === Hysteria) playLaughSound();
      else if (condition === Deluded) playTwinkleSound();
      else if (condition === Frightened) playScaredSound();
    }
  }, [isOpen, condition]);

  const handleClose = () => {
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
