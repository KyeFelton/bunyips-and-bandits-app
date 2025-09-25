import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { HeartPulse, Skull, Stethoscope } from "lucide-react";
import { useState } from "react";
import { currentPhysiqueAtom } from "./../state/character";
import { useAtom } from "jotai";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const DefeatModal = ({ isOpen, onClose }: Props) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isDead, setIsDead] = useState(Math.random() < 0.5);
  const [currentPhysique, setCurrentPhysique] = useAtom(currentPhysiqueAtom);

  const handleReveal = () => {
    setIsRevealed(true);
    const isDead = Math.random() < 0.5;
    setIsDead(isDead);
    if (!isDead) {
      setCurrentPhysique(Math.max(currentPhysique, 1));
    }
  };

  const handleClose = () => {
    setIsRevealed(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center">
            {!isRevealed
              ? "You have been defeated"
              : isDead
              ? "You are dead"
              : "You are alive!"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4 text-muted-foreground text-center">
          {!isRevealed ? (
            <>
              <Stethoscope className="h-16 w-16" />
              <p>
                You have been pushed to your breaking point and collapse to the
                floor
              </p>
              <p>
                Until an ally checks your vital signs, no one knows for sure if
                you're alive or not...
              </p>
              <div />
              <Button onClick={handleReveal} className="w-full">
                Reveal Fate
              </Button>
            </>
          ) : isDead ? (
            <>
              <Skull className="h-16 w-16" />
              <p>Your journey has come to an end...</p>
            </>
          ) : (
            <>
              <HeartPulse className="h-16 w-16 text-red-foreground" />
              <p>...but only just</p>
              <p>
                You need to spend one week in a safe environment with food
                before you can recover your heatlh through resting
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
