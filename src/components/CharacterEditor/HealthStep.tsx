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
import { MaxHealthBar } from "../MaxHealthBar";

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

  const totalUpgrades = physiqueUpgrades + moraleUpgrades + staminaUpgrades;
  const remainingUpgrades = availableHealthUpgrades - totalUpgrades;
  const maxUpgradesPerTrack = Math.floor(availableHealthUpgrades / 2);
  const maxSegments = 15;

  const handlePhysiqueUpgrade = (amount: number) => {
    setPhysiqueUpgrades(physiqueUpgrades + amount);
    setCurrentPhysique(physique.current + amount);
  };

  const handleMoraleUpgrade = (amount: number) => {
    setMoraleUpgrades(moraleUpgrades + amount);
    setCurrentMorale(morale.current + amount);
  };

  const handleStaminaUpgrade = (amount: number) => {
    setStaminaUpgrades(staminaUpgrades + amount);
    setCurrentStamina(stamina.current + amount);
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-muted-foreground">
        <p>Available health upgrades: {remainingUpgrades}</p>
        <p className="mt-2">
          You can upgrade each health track up to{" "}
          {Math.floor(availableHealthUpgrades / 2)} times.
        </p>
      </div>

      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Physique"
        onChange={(value) => handlePhysiqueUpgrade(value)}
        upgrades={physiqueUpgrades}
        value={physique.max}
      />
      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Morale"
        onChange={(value) => handleMoraleUpgrade(value)}
        upgrades={moraleUpgrades}
        value={morale.max}
      />
      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Stamina"
        onChange={(value) => handleStaminaUpgrade(value)}
        upgrades={staminaUpgrades}
        value={stamina.max}
      />
    </div>
  );
};
