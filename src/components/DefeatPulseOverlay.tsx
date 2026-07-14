import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { DEFEAT_PULSE_CONFIG } from "../hooks/useDefeatPulse";

type Props = {
  active: boolean;
  fadingOut?: boolean;
  pulseSession: number;
};

export const DefeatPulseOverlay = ({
  active,
  fadingOut = false,
  pulseSession,
}: Props) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    if (!active) {
      setIsPulsing(false);
      return;
    }

    setIsPulsing(true);

    const stopTimer = window.setTimeout(() => {
      setIsPulsing(false);
    }, DEFEAT_PULSE_CONFIG.startDelayMs +
      DEFEAT_PULSE_CONFIG.beatCount * DEFEAT_PULSE_CONFIG.cycleDurationMs);

    return () => window.clearTimeout(stopTimer);
  }, [active, pulseSession]);

  const beatTimes = useMemo(
    () => [
      0,
      DEFEAT_PULSE_CONFIG.lubPeakPercent / 100,
      DEFEAT_PULSE_CONFIG.dubPeakPercent / 100,
      1,
    ],
    [],
  );

  const pulseTransition = useMemo(
    () => ({
      duration: DEFEAT_PULSE_CONFIG.cycleDurationMs / 1000,
      delay: DEFEAT_PULSE_CONFIG.startDelayMs / 1000,
      times: beatTimes,
      repeat: DEFEAT_PULSE_CONFIG.beatCount - 1,
      ease: "easeInOut" as const,
    }),
    [beatTimes],
  );

  const restTransition = useMemo(
    () => ({ duration: 0.25, ease: "easeOut" as const }),
    [],
  );

  const vignettePulse = useMemo(
    () => ({
      opacity: [
        DEFEAT_PULSE_CONFIG.vignetteOpacityMin,
        DEFEAT_PULSE_CONFIG.vignetteOpacityLub,
        DEFEAT_PULSE_CONFIG.vignetteOpacityDub,
        DEFEAT_PULSE_CONFIG.vignetteOpacityMin,
      ],
      "--defeat-pulse-inner": [
        `${DEFEAT_PULSE_CONFIG.vignetteInnerMinPercent}%`,
        `${DEFEAT_PULSE_CONFIG.vignetteInnerLubPercent}%`,
        `${DEFEAT_PULSE_CONFIG.vignetteInnerDubPercent}%`,
        `${DEFEAT_PULSE_CONFIG.vignetteInnerMinPercent}%`,
      ],
    }),
    [],
  );

  const vignetteRest = useMemo(
    () => ({
      opacity: DEFEAT_PULSE_CONFIG.vignetteOpacityMin,
      "--defeat-pulse-inner": `${DEFEAT_PULSE_CONFIG.vignetteInnerMinPercent}%`,
    }),
    [],
  );

  const blurPulse = useMemo(
    () => ({
      backdropFilter: [
        `blur(${DEFEAT_PULSE_CONFIG.blurMinPx}px)`,
        `blur(${DEFEAT_PULSE_CONFIG.blurLubPx}px)`,
        `blur(${DEFEAT_PULSE_CONFIG.blurDubPx}px)`,
        `blur(${DEFEAT_PULSE_CONFIG.blurMinPx}px)`,
      ],
      opacity: [
        DEFEAT_PULSE_CONFIG.blurLayerOpacityMin,
        DEFEAT_PULSE_CONFIG.blurLayerOpacityLub,
        DEFEAT_PULSE_CONFIG.blurLayerOpacityDub,
        DEFEAT_PULSE_CONFIG.blurLayerOpacityMin,
      ],
    }),
    [],
  );

  const blurRest = useMemo(
    () => ({
      backdropFilter: `blur(${DEFEAT_PULSE_CONFIG.blurMinPx}px)`,
      opacity: DEFEAT_PULSE_CONFIG.blurLayerOpacityMin,
    }),
    [],
  );

  if (!active) {
    return null;
  }

  return createPortal(
    <motion.div
      aria-hidden="true"
      className="fixed inset-0 z-[55] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: fadingOut ? 0 : 1 }}
      transition={
        fadingOut
          ? {
              duration: DEFEAT_PULSE_CONFIG.fadeOutMs / 1000,
              ease: "easeOut",
            }
          : { duration: 0.3, ease: "easeOut" }
      }
    >
      <motion.div
        key={`vignette-${pulseSession}`}
        className="absolute inset-0"
        initial={vignetteRest}
        animate={isPulsing ? vignettePulse : vignetteRest}
        transition={isPulsing ? pulseTransition : restTransition}
        style={
          {
            background: `radial-gradient(ellipse at center, transparent var(--defeat-pulse-inner), hsl(var(--danger) / ${DEFEAT_PULSE_CONFIG.redIntensity}) 100%)`,
          } as CSSProperties
        }
      />
      <motion.div
        key={`blur-${pulseSession}`}
        className="absolute inset-0"
        initial={blurRest}
        style={{
          maskImage: `radial-gradient(ellipse at center, transparent ${DEFEAT_PULSE_CONFIG.blurMaskInnerPercent}%, hsl(var(--foreground)) 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${DEFEAT_PULSE_CONFIG.blurMaskInnerPercent}%, hsl(var(--foreground)) 100%)`,
        }}
        animate={isPulsing ? blurPulse : blurRest}
        transition={isPulsing ? pulseTransition : restTransition}
      />
    </motion.div>,
    document.body,
  );
};
