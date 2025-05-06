import { MaxHealthBar } from "./MaxHealthBar";

export type Health = {
  physique: number;
  morale: number;
  stamina: number;
};

type HealthUpgradeFormProps = {
  availableHealthUpgrades: number;
  onChanges: (changes: Health) => void;
  initialUpgrades: Health;
  currentValues: Health;
};

export const HealthUpgradeForm = ({
  availableHealthUpgrades,
  onChanges,
  initialUpgrades,
  currentValues,
}: HealthUpgradeFormProps) => {
  const totalUpgrades =
    initialUpgrades.physique + initialUpgrades.morale + initialUpgrades.stamina;
  const remainingUpgrades = availableHealthUpgrades - totalUpgrades;
  const maxUpgradesPerTrack = Math.floor(availableHealthUpgrades / 2);
  const maxSegments = 15;

  const handleUpgrade = (
    type: "physique" | "morale" | "stamina",
    amount: number
  ) => {
    const newUpgrades = {
      ...initialUpgrades,
      [type]: initialUpgrades[type] + amount,
    };
    onChanges(newUpgrades);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-4 text-sm text-muted-foreground">
        <div>Choose your health tracks to upgrade.</div>
        <div>
          Health tracks upgraded: {totalUpgrades}/{availableHealthUpgrades}
        </div>
      </div>

      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Physique"
        onChange={(value) => handleUpgrade("physique", value)}
        upgrades={initialUpgrades.physique}
        value={currentValues.physique}
      />
      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Morale"
        onChange={(value) => handleUpgrade("morale", value)}
        upgrades={initialUpgrades.morale}
        value={currentValues.morale}
      />
      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Stamina"
        onChange={(value) => handleUpgrade("stamina", value)}
        upgrades={initialUpgrades.stamina}
        value={currentValues.stamina}
      />
    </div>
  );
};
