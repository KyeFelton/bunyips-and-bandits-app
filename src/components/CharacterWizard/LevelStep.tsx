import { useAtom } from "jotai";
import { levelAtom } from "../../state/primitives";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const LevelStep = () => {
  const [level, setLevel] = useAtom(levelAtom);
  const levels = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="space-y-4">
      <Select
        value={level.toString()}
        onValueChange={(value) => setLevel(parseInt(value))}
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
          <li>Available path points (2 + floor(level/2))</li>
          <li>Available skill upgrades (floor(level/5) × 2)</li>
          <li>Base stats (health, sanity, stamina)</li>
        </ul>
      </div>
    </div>
  );
};
