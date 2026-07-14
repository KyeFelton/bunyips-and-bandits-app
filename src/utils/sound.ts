import breatheSound from "../sounds/breathe-in-breathe-out.mp3";
import crowdDisappointedSound from "../sounds/crowd-disappointed.mp3";
import deadSound from "../sounds/dead.mp3";
import diceRollSound from "../sounds/dice-roll.mp3";
import heartbeatSound from "../sounds/heartbeat.mp3";
import wheelSpinSound from "../sounds/wheel-spin.mp3";
import youWinSound from "../sounds/you-win.mp3";

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

export const playWheelSpinSound = () => {
  const audio = new Audio(wheelSpinSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });

  return {
    stop: () => {
      audio.pause();
      audio.currentTime = 0;
    },
  };
};

export const playYouWinSound = () => {
  const audio = new Audio(youWinSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export const playCrowdDisappointedSound = () => {
  const audio = new Audio(crowdDisappointedSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};
