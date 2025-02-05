import { useAtom, useAtomValue } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { StatBar } from "./StatBar";
import {
  healthAtom,
  sanityAtom,
  staminaAtom,
  weaponDamageAtom,
} from "../state/derived";
import {
  levelAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
} from "../state/primitives";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const CharacterStatsCard = () => {
  const [level, setLevel] = useAtom(levelAtom);
  const health = useAtomValue(healthAtom);
  const sanity = useAtomValue(sanityAtom);
  const stamina = useAtomValue(staminaAtom);
  const weaponDamage = useAtomValue(weaponDamageAtom);
  const [currentHealth, setCurrentHealth] = useAtom(currentHealthAtom);
  const [currentSanity, setCurrentSanity] = useAtom(currentSanityAtom);
  const [currentStamina, setCurrentStamina] = useAtom(currentStaminaAtom);

  const handleLevelChange = (newLevel: string) => {
    const nextLevel = parseInt(newLevel);
    const levelDifference = nextLevel - level;

    setCurrentHealth(
      Math.max(currentHealth + levelDifference * health.increments, 0)
    );
    setCurrentSanity(
      Math.max(currentSanity + levelDifference * sanity.increments, 0)
    );
    setCurrentStamina(
      Math.max(currentStamina + levelDifference * stamina.increments, 0)
    );
    setLevel(nextLevel);
  };

  const levels = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stats</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="level">Level</Label>
          <Select value={level.toString()} onValueChange={handleLevelChange}>
            <SelectTrigger id="level">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {levels.map((l) => (
                <SelectItem key={l} value={l.toString()}>
                  Level {l}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <StatBar colour="red" type="health" max={health.max} />
        <StatBar colour="green" type="sanity" max={sanity.max} />
        <StatBar colour="blue" type="stamina" max={stamina.max} />

        <div className="pt-2 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Actions</span>
            <span>2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Evasions</span>
            <span>2</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Weapon Damage</span>
            <span>{weaponDamage > 0 ? `+${weaponDamage}` : "-"}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
