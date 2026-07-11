import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { activeRollAtom } from "../state/roll";
import { cn } from "../utils/cn";
import {
  playCrowdDisappointedSound,
  playWheelSpinSound,
  playYouWinSound,
} from "../utils/sound";
import {
  WHEEL_SPIN_LAND_MS,
  WHEEL_SPIN_MUSIC_STOP_DELAY_MS,
  WHEEL_SPIN_RESULT_REVEAL_DELAY_MS,
} from "../utils/wheelSpinTiming";
import { DiceSlotReel } from "./DiceSlotReel";
import { RollText } from "./RollText";

const RESULT_HOLD_MS = 10000;

export const RollOverlay = () => {
  const [activeRoll, setActiveRoll] = useAtom(activeRollAtom);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!activeRoll) {
      setShowResult(false);
      return;
    }

    setShowResult(false);
    const wheelSpin = playWheelSpinSound();

    const stopMusicTimer = window.setTimeout(
      () => wheelSpin.stop(),
      WHEEL_SPIN_LAND_MS + WHEEL_SPIN_MUSIC_STOP_DELAY_MS,
    );
    const revealTimer = window.setTimeout(() => {
      setShowResult(true);

      if (activeRoll.isCriticalSuccess) {
        playYouWinSound();
      } else if (activeRoll.naturalRoll === 1) {
        playCrowdDisappointedSound();
      }
    }, WHEEL_SPIN_LAND_MS + WHEEL_SPIN_RESULT_REVEAL_DELAY_MS);
    const dismissTimer = window.setTimeout(
      () => setActiveRoll(null),
      WHEEL_SPIN_LAND_MS + WHEEL_SPIN_RESULT_REVEAL_DELAY_MS + RESULT_HOLD_MS,
    );

    return () => {
      wheelSpin.stop();
      window.clearTimeout(stopMusicTimer);
      window.clearTimeout(revealTimer);
      window.clearTimeout(dismissTimer);
    };
  }, [activeRoll, setActiveRoll]);

  const showBothRolls = activeRoll?.hasAdvantage || activeRoll?.hasDisadvantage;

  const selectedNaturalRoll = activeRoll?.naturalRoll;

  return (
    <AnimatePresence>
      {activeRoll && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setActiveRoll(null)}
        >
          <div className="absolute inset-0 bg-foreground/70" />

          <motion.div
            className="relative w-full max-w-sm rounded-lg border border-border bg-background p-6 shadow-lg"
            initial={{ scale: 0.92, y: 16 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            onClick={(event) => event.stopPropagation()}
          >
            <p className="text-center text-sm font-semibold text-foreground">
              {activeRoll.name}
            </p>

            <div
              className={cn(
                "mt-5 flex items-center justify-center gap-3",
                showBothRolls ? "flex-row" : "flex-col",
              )}
            >
              {showBothRolls ? (
                <>
                  <DiceSlotReel
                    sides={activeRoll.dice}
                    value={activeRoll.naturalRoll1}
                    spinId={`${activeRoll.id}-1`}
                    className={cn(
                      selectedNaturalRoll === activeRoll.naturalRoll1 &&
                        showResult &&
                        "border-accent ring-2 ring-accent/40",
                    )}
                  />
                  <DiceSlotReel
                    sides={activeRoll.dice}
                    value={activeRoll.naturalRoll2}
                    spinId={`${activeRoll.id}-2`}
                    className={cn(
                      selectedNaturalRoll === activeRoll.naturalRoll2 &&
                        showResult &&
                        "border-accent ring-2 ring-accent/40",
                    )}
                  />
                </>
              ) : (
                <DiceSlotReel
                  sides={activeRoll.dice}
                  value={activeRoll.naturalRoll}
                  spinId={activeRoll.id}
                />
              )}
            </div>

            <AnimatePresence>
              {showResult && activeRoll.isCriticalSuccess && (
                <motion.p
                  className="mt-3 text-center text-sm font-semibold text-accent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  Critical!
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  className="mt-5 space-y-2 text-center font-mono"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div>
                    <span className="text-3xl font-bold tabular-nums">
                      {activeRoll.roll}
                    </span>
                    {activeRoll.extraText && (
                      <span className="ml-2 text-lg text-muted-foreground">
                        {activeRoll.extraText}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <RollText
                      dice={activeRoll.dice}
                      modifier={activeRoll.modifier}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
