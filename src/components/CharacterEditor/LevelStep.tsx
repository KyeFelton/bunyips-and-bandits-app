import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import {
  levelAtom,
  availablePathPointsAtom,
  availableSkillPointsAtom,
  healthAtom,
  sanityAtom,
  staminaAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
} from '../../state/character';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const LevelStep = () => {
  const [level, setLevel] = useAtom(levelAtom);
  const availablePathPoints = useAtomValue(availablePathPointsAtom);
  const availableSkillPoints = useAtomValue(availableSkillPointsAtom);
  const health = useAtomValue(healthAtom);
  const sanity = useAtomValue(sanityAtom);
  const stamina = useAtomValue(staminaAtom);
  const setCurrentHealth = useSetAtom(currentHealthAtom);
  const setCurrentSanity = useSetAtom(currentSanityAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);
  const levels = Array.from({ length: 20 }, (_, i) => i + 1);

  const handleLevelChange = (value: number) => {
    const delta = value - level;
    setCurrentHealth(Math.max(health.current + delta * health.increments, 0));
    setCurrentSanity(Math.max(sanity.current + delta * sanity.increments, 0));
    setCurrentStamina(
      Math.max(stamina.current + delta * stamina.increments, 0)
    );
    setLevel(value);
  };

  return (
    <div className="space-y-4">
      <Select
        value={level.toString()}
        onValueChange={(value) => handleLevelChange(parseInt(value))}
      >
        <SelectTrigger>
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
          <li>Number of skill upgrades: {availableSkillPoints}</li>
          <li>Bonus hit points: {health.increments * level}</li>
          <li>Bonus morale: {sanity.increments * level}</li>
          <li>Bonus stamina: {stamina.increments * level}</li>
        </ul>
      </div>
    </div>
  );
};
