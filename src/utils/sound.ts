import diceRollSound from "../sounds/dice-roll.mp3";
import heartbeatSound from "../sounds/heartbeat.mp3";
import breatheSound from "../sounds/breathe-in-breathe-out.mp3";
import deadSound from "../sounds/dead.mp3";
import twinkleSound from "../sounds/twinkle.mp3";
import huhSound from "../sounds/huh.mp3";
import scaredSound from "../sounds/scared-breathing.mp3";
import laughSound from "../sounds/laughs.mp3";

export const playDiceRollSound = () => {
  const audio = new Audio(diceRollSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playHeartbeatSound = () => {
  const audio = new Audio(heartbeatSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playBreatheSound = () => {
  const audio = new Audio(breatheSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playDeadSound = () => {
  const audio = new Audio(deadSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playTwinkleSound = () => {
  const audio = new Audio(twinkleSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playHuhSound = () => {
  const audio = new Audio(huhSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playScaredSound = () => {
  const audio = new Audio(scaredSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playLaughSound = () => {
  const audio = new Audio(laughSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};
