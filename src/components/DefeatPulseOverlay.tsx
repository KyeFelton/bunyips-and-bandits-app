import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";

/** Tune these to match heartbeat.mp3 */
const CONFIG = {
  cycleDurationMs: 820,
  startDelayMs: 0,
  beatCount: 10,
  lubPeakPercent: 12,
  dubPeakPercent: 28,
  vignetteOpacityMin: 0.2,
  vignetteOpacityLub: 0.75,
  vignetteOpacityDub: 0.5,
  blurMinPx: 0,
  blurLubPx: 5,
  blurDubPx: 2,
  blurLayerOpacityMin: 0.35,
  blurLayerOpacityLub: 1,
  blurLayerOpacityDub: 0.6,
  vignetteInnerMinPercent: 52,
  vignetteInnerLubPercent: 40,
  vignetteInnerDubPercent: 46,
  redIntensity: 0.6,
  blurMaskInnerPercent: 40,
  fadeOutMs: 400,
} as const;

export const defeatPulseFadeOutMs = CONFIG.fadeOutMs;

type Props = {
  active: boolean;
  fadingOut?: boolean;
};

export const DefeatPulseOverlay = ({ active, fadingOut = false }: Props) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    if (!active) {
      setIsPulsing(false);
      return;
    }

    setPulseKey((key) => key + 1);
    setIsPulsing(true);

    const stopTimer = window.setTimeout(
      () => {
        setIsPulsing(false);
      },
      CONFIG.startDelayMs + CONFIG.beatCount * CONFIG.cycleDurationMs,
    );

    return () => window.clearTimeout(stopTimer);
  }, [active]);

  const beatTimes = useMemo(
    () => [0, CONFIG.lubPeakPercent / 100, CONFIG.dubPeakPercent / 100, 1],
    [],
  );

  const pulseTransition = useMemo(
    () => ({
      duration: CONFIG.cycleDurationMs / 1000,
      delay: CONFIG.startDelayMs / 1000,
      times: beatTimes,
      repeat: CONFIG.beatCount - 1,
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
        CONFIG.vignetteOpacityMin,
        CONFIG.vignetteOpacityLub,
        CONFIG.vignetteOpacityDub,
        CONFIG.vignetteOpacityMin,
      ],
      "--defeat-pulse-inner": [
        `${CONFIG.vignetteInnerMinPercent}%`,
        `${CONFIG.vignetteInnerLubPercent}%`,
        `${CONFIG.vignetteInnerDubPercent}%`,
        `${CONFIG.vignetteInnerMinPercent}%`,
      ],
    }),
    [],
  );

  const vignetteRest = useMemo(
    () => ({
      opacity: CONFIG.vignetteOpacityMin,
      "--defeat-pulse-inner": `${CONFIG.vignetteInnerMinPercent}%`,
    }),
    [],
  );

  const blurPulse = useMemo(
    () => ({
      backdropFilter: [
        `blur(${CONFIG.blurMinPx}px)`,
        `blur(${CONFIG.blurLubPx}px)`,
        `blur(${CONFIG.blurDubPx}px)`,
        `blur(${CONFIG.blurMinPx}px)`,
      ],
      opacity: [
        CONFIG.blurLayerOpacityMin,
        CONFIG.blurLayerOpacityLub,
        CONFIG.blurLayerOpacityDub,
        CONFIG.blurLayerOpacityMin,
      ],
    }),
    [],
  );

  const blurRest = useMemo(
    () => ({
      backdropFilter: `blur(${CONFIG.blurMinPx}px)`,
      opacity: CONFIG.blurLayerOpacityMin,
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
          ? { duration: CONFIG.fadeOutMs / 1000, ease: "easeOut" }
          : { duration: 0.3, ease: "easeOut" }
      }
    >
      <motion.div
        key={`vignette-${pulseKey}`}
        className="absolute inset-0"
        animate={isPulsing ? vignettePulse : vignetteRest}
        transition={isPulsing ? pulseTransition : restTransition}
        style={
          {
            background: `radial-gradient(ellipse at center, transparent var(--defeat-pulse-inner), hsl(var(--danger) / ${CONFIG.redIntensity}) 100%)`,
          } as CSSProperties
        }
      />
      <motion.div
        key={`blur-${pulseKey}`}
        className="absolute inset-0"
        style={{
          maskImage: `radial-gradient(ellipse at center, transparent ${CONFIG.blurMaskInnerPercent}%, hsl(var(--foreground)) 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${CONFIG.blurMaskInnerPercent}%, hsl(var(--foreground)) 100%)`,
        }}
        animate={isPulsing ? blurPulse : blurRest}
        transition={isPulsing ? pulseTransition : restTransition}
      />
    </motion.div>,
    document.body,
  );
};
