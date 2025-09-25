import { useAtom, useAtomValue } from "jotai";
import {
  levelAtom,
  availablePathPointsAtom,
  availableSkillPointsAtom,
  MAX_LEVEL,
  availableHealthUpgradesAtom,
} from "./../state/character";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const LevelStep = () => {
  const [level, setLevel] = useAtom(levelAtom);
  const availableHealthUpgrades = useAtomValue(availableHealthUpgradesAtom);
  const availablePathPoints = useAtomValue(availablePathPointsAtom);
  const availableSkillPoints = useAtomValue(availableSkillPointsAtom);
  const levels = Array.from({ length: MAX_LEVEL }, (_, i) => i + 1);

  const handleLevelChange = (value: number) => {
    setLevel(value);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-md text-muted-foreground">
        <div>
          Set your starting level to determine your character’s power and
          experience.
        </div>
      </div>
      <Select
        value={level.toString()}
        onValueChange={(value) => handleLevelChange(parseInt(value))}
      >
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select level" />
        </SelectTrigger>
        <SelectContent>
          {levels.map((l) => (
            <SelectItem key={l} value={l.toString()}>
              Level {l}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="text-sm text-muted-foreground">
        <p>Your level determines:</p>
        <ul className="list-disc list-inside mt-2 space-y-2">
          <li>Number of path progessions: {availablePathPoints}</li>
          <li>Number of health upgrades: {availableHealthUpgrades}</li>
          <li>Number of skill upgrades: {availableSkillPoints}</li>
        </ul>
      </div>
    </div>
  );
};
