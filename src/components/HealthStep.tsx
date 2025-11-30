import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  bodyAtom,
  mindAtom,
  staminaAtom,
  currentBodyAtom,
  currentMindAtom,
  currentStaminaAtom,
  bodyUpgradesAtom,
  mindUpgradesAtom,
  staminaUpgradesAtom,
  availableHealthUpgradesAtom,
} from "./../state/character";
import { HealthUpgradeForm } from "./HealthUpgradeForm";

export const HealthStep = () => {
  const body = useAtomValue(bodyAtom);
  const mind = useAtomValue(mindAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentBody = useSetAtom(currentBodyAtom);
  const setCurrentMind = useSetAtom(currentMindAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const [bodyUpgrades, setBodyUpgrades] = useAtom(bodyUpgradesAtom);
  const [mindUpgrades, setMindUpgrades] = useAtom(mindUpgradesAtom);
  const [staminaUpgrades, setStaminaUpgrades] = useAtom(staminaUpgradesAtom);
  const availableHealthUpgrades = useAtomValue(availableHealthUpgradesAtom);

  const handleChanges = (changes: {
    body: number;
    mind: number;
    stamina: number;
  }) => {
    setBodyUpgrades(changes.body);
    setCurrentBody(
      body.current + (changes.body - bodyUpgrades)
    );
    setMindUpgrades(changes.mind);
    setCurrentMind(mind.current + (changes.mind - mindUpgrades));
    setStaminaUpgrades(changes.stamina);
    setCurrentStamina(stamina.current + (changes.stamina - staminaUpgrades));
  };

  return (
    <HealthUpgradeForm
      availableHealthUpgrades={availableHealthUpgrades}
      onChanges={handleChanges}
      initialUpgrades={{
        body: bodyUpgrades,
        mind: mindUpgrades,
        stamina: staminaUpgrades,
      }}
      currentValues={{
        body: body.max,
        mind: mind.max,
        stamina: stamina.max,
      }}
    />
  );
};
