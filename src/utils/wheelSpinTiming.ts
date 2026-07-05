// Wheel spin audio: 22 clicks over ~2.8s, half speed for the final third of intervals.
export const WHEEL_SPIN_DURATION_S = 2.6;
export const WHEEL_SPIN_DURATION_MS = WHEEL_SPIN_DURATION_S * 1000;
export const WHEEL_SPIN_CLICK_COUNT = 22;
export const WHEEL_SPIN_MUSIC_STOP_DELAY_MS = 100;
export const WHEEL_SPIN_RESULT_REVEAL_DELAY_MS = 500;

const FAST_INTERVAL_COUNT = 17;
const SLOW_INTERVAL_COUNT = 4;
const FAST_INTERVAL_S =
  WHEEL_SPIN_DURATION_S / (FAST_INTERVAL_COUNT + SLOW_INTERVAL_COUNT * 2);
const SLOW_INTERVAL_S = FAST_INTERVAL_S * 2;

export const WHEEL_SPIN_CLICK_TIMES_S: number[] = (() => {
  const times = [0];

  for (let i = 1; i <= FAST_INTERVAL_COUNT; i++) {
    times.push(i * FAST_INTERVAL_S);
  }

  const fastPhaseEnd = FAST_INTERVAL_COUNT * FAST_INTERVAL_S;
  for (let i = 1; i <= SLOW_INTERVAL_COUNT; i++) {
    times.push(fastPhaseEnd + i * SLOW_INTERVAL_S);
  }

  return times;
})();

export const WHEEL_SPIN_LAND_MS =
  WHEEL_SPIN_CLICK_TIMES_S[WHEEL_SPIN_CLICK_TIMES_S.length - 1] * 1000;
