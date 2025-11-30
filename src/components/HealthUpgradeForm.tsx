import { MaxHealthBar } from "./MaxHealthBar";

export type Health = {
  body: number;
  mind: number;
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
    initialUpgrades.body + initialUpgrades.mind + initialUpgrades.stamina;
  const remainingUpgrades = availableHealthUpgrades - totalUpgrades;
  const maxUpgradesPerTrack = 5;
  const maxSegments = 15;

  const handleUpgrade = (
    type: "body" | "mind" | "stamina",
    amount: number
  ) => {
    const newUpgrades = {
      ...initialUpgrades,
      [type]: initialUpgrades[type] + amount,
    };
    onChanges(newUpgrades);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 text-md text-muted-foreground">
        <div className="flex-1 sm:whitespace-nowrap">
          Choose health tracks to upgrade to bolster your character.
        </div>
        <div className="whitespace-nowrap">
          Health tracks upgraded: {totalUpgrades}/{availableHealthUpgrades}
        </div>
      </div>

      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Body"
        onChange={(value) => handleUpgrade("body", value)}
        upgrades={initialUpgrades.body}
        value={currentValues.body}
      />
      <MaxHealthBar
        availableUpgrades={remainingUpgrades}
        maxUpgrades={maxUpgradesPerTrack}
        maxValue={maxSegments}
        name="Mind"
        onChange={(value) => handleUpgrade("mind", value)}
        upgrades={initialUpgrades.mind}
        value={currentValues.mind}
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
