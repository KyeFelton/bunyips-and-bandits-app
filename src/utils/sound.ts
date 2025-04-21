import diceRollSound from "../sounds/dice-roll.mp3";

export const playDiceRollSound = () => {
  const audio = new Audio(diceRollSound);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};
