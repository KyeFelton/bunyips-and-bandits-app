import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  physiqueAtom,
  moraleAtom,
  staminaAtom,
  currentPhysiqueAtom,
  currentMoraleAtom,
  currentStaminaAtom,
  physiqueUpgradesAtom,
  moraleUpgradesAtom,
  staminaUpgradesAtom,
  availableHealthUpgradesAtom,
} from "../../state/character";
import { HealthUpgradeForm } from "../HealthUpgradeForm";

export const HealthStep = () => {
  const physique = useAtomValue(physiqueAtom);
  const morale = useAtomValue(moraleAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentPhysique = useSetAtom(currentPhysiqueAtom);
  const setCurrentMorale = useSetAtom(currentMoraleAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const [physiqueUpgrades, setPhysiqueUpgrades] = useAtom(physiqueUpgradesAtom);
  const [moraleUpgrades, setMoraleUpgrades] = useAtom(moraleUpgradesAtom);
  const [staminaUpgrades, setStaminaUpgrades] = useAtom(staminaUpgradesAtom);
  const availableHealthUpgrades = useAtomValue(availableHealthUpgradesAtom);

  const handleChanges = (changes: {
    physique: number;
    morale: number;
    stamina: number;
  }) => {
    setPhysiqueUpgrades(changes.physique);
    setCurrentPhysique(
      physique.current + (changes.physique - physiqueUpgrades)
    );
    setMoraleUpgrades(changes.morale);
    setCurrentMorale(morale.current + (changes.morale - moraleUpgrades));
    setStaminaUpgrades(changes.stamina);
    setCurrentStamina(stamina.current + (changes.stamina - staminaUpgrades));
  };

  return (
    <HealthUpgradeForm
      availableHealthUpgrades={availableHealthUpgrades}
      onChanges={handleChanges}
      initialUpgrades={{
        physique: physiqueUpgrades,
        morale: moraleUpgrades,
        stamina: staminaUpgrades,
      }}
      currentValues={{
        physique: physique.max,
        morale: morale.max,
        stamina: stamina.max,
      }}
    />
  );
};
