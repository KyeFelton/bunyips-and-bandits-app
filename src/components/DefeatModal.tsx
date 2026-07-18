import { useAtom, useSetAtom } from "jotai";
import { Bed, HeartCrack, Heart, Skull } from "lucide-react";
import { useEffect, useState } from "react";
import { Unconscious } from "../models/conditions";
import { Trait } from "../models/traits";
import {
  conditionsAtom,
  currentBodyAtom,
  currentMindAtom,
  isDeadAtom,
  injuriesAtom,
  traumasAtom,
} from "../state/character";
import {
  playBreatheSound,
  playDeadSound,
  playHeartbeatSound,
  playWheelSpinSound,
} from "../utils/sound";
import {
  WHEEL_SPIN_LAND_MS,
  WHEEL_SPIN_MUSIC_STOP_DELAY_MS,
  WHEEL_SPIN_RESULT_REVEAL_DELAY_MS,
} from "../utils/wheelSpinTiming";
import { DiceSlotReel } from "./DiceSlotReel";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { LUCK_DIE } from "../utils/dice";
import "./DefeatModal.css";
import { mentalInjuries, physicalInjuries } from "../data/traits/injuries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RichDescription } from "./RichDescription";

type Phase = "unconscious" | "rolling" | "revealed" | "injurySelection";
type HealthTrack = "body" | "mind";
export type FateOutcome = {
  isDead: boolean;
  isUnconscious: boolean;
  isInjured: boolean;
  isRecovered: boolean;
};

const resolveOutcome = (track: HealthTrack, roll: number) => {
  return {
    isDead: track === "body" && roll <= 2,
    isUnconscious: track === "mind" && roll <= 2,
    isInjured: (track === "mind" && roll <= 2) || (roll >= 3 && roll <= 4),
    isRecovered: roll >= 3,
  };
};

type InjuryPickerProps = {
  track: HealthTrack;
  ownedInjuryNames: string[];
  onConfirm: (trait: Trait) => void;
  onSkip?: () => void;
};

const InjuryPicker = ({
  track,
  ownedInjuryNames,
  onConfirm,
  onSkip,
}: InjuryPickerProps) => {
  const injuries = track === "body" ? physicalInjuries : mentalInjuries;
  const availableInjuries = injuries.filter(
    (injury) => !ownedInjuryNames.includes(injury.name),
  );
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const selectedInjury = selectedName
    ? availableInjuries.find((injury) => injury.name === selectedName)
    : null;

  if (availableInjuries.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground text-center">
          You already have every injury from this list.
        </p>
        {onSkip && (
          <Button className="w-full" onClick={onSkip}>
            Continue
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="flex w-full min-h-[250px] flex-col gap-4">
      <Select value={selectedName ?? undefined} onValueChange={setSelectedName}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an injury" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px] overflow-y-auto">
          {availableInjuries.map((injury) => (
            <SelectItem key={injury.name} value={injury.name}>
              {injury.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedInjury && (
        <div className="text-sm text-muted-foreground text-left">
          <RichDescription text={selectedInjury.description} />
        </div>
      )}
      <Button
        className="w-full mt-auto"
        disabled={selectedInjury === null}
        onClick={() => selectedInjury && onConfirm(selectedInjury)}
      >
        Confirm
      </Button>
    </div>
  );
};

type Props = {
  isOpen: boolean;
  track: HealthTrack;
  onClose: () => void;
  onRevealedChange?: (isRevealed: boolean) => void;
};

export const DefeatModal = ({
  isOpen,
  track,
  onClose,
  onRevealedChange,
}: Props) => {
  const [phase, setPhase] = useState<Phase>("unconscious");
  const [luckRoll, setLuckRoll] = useState(1);
  const [spinId, setSpinId] = useState("0");
  const [outcome, setOutcome] = useState<FateOutcome | null>(null);
  const [showRollResult, setShowRollResult] = useState(false);

  const [injuries, setInjuries] = useAtom(injuriesAtom);
  const [traumas, setTraumas] = useAtom(traumasAtom);
  const setIsDead = useSetAtom(isDeadAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const [conditions, setConditions] = useAtom(conditionsAtom);

  const ownedInjuryNames = injuries
    .map((injury) => injury.name)
    .concat(traumas.map((trauma) => trauma.name));

  useEffect(() => {
    if (isOpen) {
      setPhase("unconscious");
      setLuckRoll(1);
      setSpinId("0");
      setOutcome(null);
      setShowRollResult(false);
      onRevealedChange?.(false);
      playHeartbeatSound();
    }
  }, [isOpen, onRevealedChange]);

  const applyOutcome = (resolvedOutcome: FateOutcome) => {
    if (resolvedOutcome.isDead) {
      setIsDead(true);
      return;
    }

    if (resolvedOutcome.isRecovered) {
      if (track === "body") {
        setCurrentBody(1);
      } else {
        setCurrentMind(1);
      }
    }

    const hasUnconscious = conditions.some(
      (condition) => condition.name === Unconscious.name,
    );
    if (resolvedOutcome.isUnconscious && !hasUnconscious) {
      setConditions((prev) => [...prev, Unconscious]);
    } else if (!resolvedOutcome.isUnconscious && hasUnconscious) {
      setConditions((prev) =>
        prev.filter((con) => con.name !== Unconscious.name),
      );
    }
  };

  const handleReveal = () => {
    const rolled = Math.ceil(Math.random() * LUCK_DIE);
    const resolvedOutcome = resolveOutcome(track, rolled);

    setLuckRoll(rolled);
    setSpinId(String(Date.now()));
    setOutcome(resolvedOutcome);
    setPhase("rolling");
    setShowRollResult(false);

    const wheelSpin = playWheelSpinSound();
    window.setTimeout(
      () => wheelSpin.stop(),
      WHEEL_SPIN_LAND_MS + WHEEL_SPIN_MUSIC_STOP_DELAY_MS,
    );
    window.setTimeout(() => {
      setShowRollResult(true);
      setPhase("revealed");
      onRevealedChange?.(true);

      if (resolvedOutcome.isDead) {
        playDeadSound();
      } else if (!resolvedOutcome.isUnconscious) {
        playBreatheSound();
      }
      applyOutcome(resolvedOutcome);
    }, WHEEL_SPIN_LAND_MS + WHEEL_SPIN_RESULT_REVEAL_DELAY_MS);
  };

  const handleInjuryConfirm = (injury: Trait) => {
    if (track === "body") {
      setInjuries((prev) => [...prev, injury]);
    } else {
      setTraumas((prev) => [...prev, injury]);
    }

    onClose();
  };

  const handleInjurySkip = () => {
    onClose();
  };

  const handleClose = () => {
    if (phase === "rolling" || phase === "injurySelection") {
      return;
    }
    onClose();
  };

  const title = (() => {
    if (phase === "unconscious") {
      return "You are knocked out";
    }
    if (phase === "rolling") {
      return "Rolling for your fate...";
    }
    if (phase === "revealed") {
      if (outcome?.isDead) {
        return "You are dead";
      }
      if (outcome?.isUnconscious) {
        return "You are unconscious";
      }
      if (outcome?.isInjured && track === "body") {
        return "You are injured";
      }
      if (outcome?.isInjured && track === "mind") {
        return "You are distressed";
      }
      if (outcome?.isRecovered) {
        return "You have recovered";
      }
    }
    if (phase === "injurySelection" && track === "body") {
      return "Choose an injury";
    }
    if (phase === "injurySelection" && track === "mind") {
      return "Choose a trauma";
    }
    return "You have been defeated";
  })();

  const rollResultCopy = (() => {
    if (!outcome) {
      return "";
    }
    if (outcome.isDead) {
      return "Your journey has come to an end...";
    }
    if (outcome.isUnconscious) {
      return "You remain unconscious until your next rest. Choose a trauma.";
    }
    if (outcome?.isInjured && track === "body") {
      return "You regain consciousness and one health, but at a cost. Choose an injury.";
    }
    if (outcome?.isInjured && track === "mind") {
      return "You regain consciousness and one health, but at a cost. Choose a trauma.";
    }
    return "You regain consciousness and one health, escaping without any injuries or traumas.";
  })();

  const showReel = phase === "rolling" || phase === "revealed";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 py-4 text-muted-foreground text-center">
          {phase === "unconscious" && (
            <>
              <HeartCrack className="heart-icon h-16 w-16" />
              <p>
                You have been pushed to your breaking point and collapse,
                unconscious.
              </p>
              <p>
                Until an ally checks your vital signs, no one knows if you're
                alive or dead. Reveal your fate once an ally comes to your aid.
              </p>
              <Button onClick={handleReveal} className="w-full">
                Reveal Fate
              </Button>
            </>
          )}

          {showReel && (
            <div className="flex w-full flex-col items-center space-y-4">
              <DiceSlotReel sides={6} spinId={spinId} value={luckRoll} />
              {showRollResult && outcome && (
                <div className="fate-content flex flex-col items-center space-y-4">
                  {outcome.isDead && <Skull className="dead-icon h-16 w-16" />}
                  {outcome.isUnconscious && (
                    <Bed className="dead-icon h-16 w-16" />
                  )}
                  {outcome.isRecovered && (
                    <Heart className="alive-icon h-16 w-16 text-danger" />
                  )}
                  <p>{rollResultCopy}</p>
                  {outcome.isInjured && (
                    <Button
                      className="w-full"
                      onClick={() => setPhase("injurySelection")}
                    >
                      {track === "body"
                        ? "Choose an injury"
                        : "Choose a trauma"}
                    </Button>
                  )}
                  {!outcome.isInjured && (
                    <Button onClick={handleClose} className="w-full">
                      Close
                    </Button>
                  )}
                </div>
              )}
            </div>
          )}

          {phase === "injurySelection" && outcome && (
            <InjuryPicker
              track={track}
              ownedInjuryNames={ownedInjuryNames}
              onConfirm={handleInjuryConfirm}
              onSkip={handleInjurySkip}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
