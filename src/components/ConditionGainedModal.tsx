import { useAtom } from "jotai";
import { useEffect } from "react";
import { playHeartbeatSound } from "../utils/sound";
import { Condition } from "./../models/conditions";
import { conditionsAtom } from "./../state/character";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  condition: Condition;
};

export const ConditionGainedModal = ({ isOpen, onClose, condition }: Props) => {
  const [conditions, setConditions] = useAtom(conditionsAtom);

  useEffect(() => {
    if (isOpen) {
      playHeartbeatSound();
    }
  }, [isOpen]);

  const handleClose = () => {
    const existingCount = conditions.filter(
      (c) => c.name === condition.name,
    ).length;

    if (condition.stackable === 0 && existingCount > 0) {
      onClose();
      return;
    }

    if (condition.stackable > 0 && existingCount >= condition.stackable) {
      onClose();
      return;
    }

    setConditions((prev) => [...prev, condition]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
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
