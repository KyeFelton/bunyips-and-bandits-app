import { useEffect, useState } from "react";

/** Tune these to match heartbeat.mp3 */
export const DEFEAT_PULSE_CONFIG = {
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

const fadeOutPulse = (
  setIsPulseVisible: (visible: boolean) => void,
  setIsPulseFadingOut: (fadingOut: boolean) => void,
) => {
  setIsPulseFadingOut(true);
  return window.setTimeout(() => {
    setIsPulseVisible(false);
    setIsPulseFadingOut(false);
  }, DEFEAT_PULSE_CONFIG.fadeOutMs);
};

export const useDefeatPulse = (isOpen: boolean, fadeOutEarly = false) => {
  const [isPulseVisible, setIsPulseVisible] = useState(false);
  const [isPulseFadingOut, setIsPulseFadingOut] = useState(false);
  const [pulseSession, setPulseSession] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setIsPulseFadingOut(false);
    setIsPulseVisible(true);
    setPulseSession((session) => session + 1);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen || !isPulseVisible || isPulseFadingOut) {
      return;
    }

    const fadeTimer = fadeOutPulse(setIsPulseVisible, setIsPulseFadingOut);
    return () => window.clearTimeout(fadeTimer);
  }, [isOpen, isPulseVisible, isPulseFadingOut]);

  useEffect(() => {
    if (!fadeOutEarly || !isPulseVisible || isPulseFadingOut) {
      return;
    }

    const fadeTimer = fadeOutPulse(setIsPulseVisible, setIsPulseFadingOut);
    return () => window.clearTimeout(fadeTimer);
  }, [fadeOutEarly, isPulseVisible, isPulseFadingOut]);

  return { isPulseVisible, isPulseFadingOut, pulseSession };
};
