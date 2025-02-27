import { useAtom, useAtomValue } from 'jotai';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { StatBar } from '../StatBar';
import { Bed } from 'lucide-react';
import {
  healthAtom,
  sanityAtom,
  staminaAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
} from '../../state/character';

export const StatsCard = () => {
  const health = useAtomValue(healthAtom);
  const sanity = useAtomValue(sanityAtom);
  const stamina = useAtomValue(staminaAtom);
  const [currentHealth, setCurrentHealth] = useAtom(currentHealthAtom);
  const [currentSanity, setCurrentSanity] = useAtom(currentSanityAtom);
  const [currentStamina, setCurrentStamina] = useAtom(currentStaminaAtom);

  const handleRest = () => {
    // Calculate health recovery (25% of missing health)
    const missingHealth = health.max - currentHealth;
    const healthRecovery = Math.ceil(missingHealth * 0.25);
    setCurrentHealth(currentHealth + healthRecovery);

    // Calculate sanity recovery (25% of missing sanity)
    const missingSanity = sanity.max - currentSanity;
    const sanityRecovery = Math.ceil(missingSanity * 0.25);
    setCurrentSanity(currentSanity + sanityRecovery);

    // Restore stamina to full
    setCurrentStamina(stamina.max);
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Health</CardTitle>
        <Button
          onClick={handleRest}
          variant="outline"
          size="sm"
          className="gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Bed className="h-4 w-4" />
          Rest
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 pt-4">
        <StatBar
          colour="red"
          max={health.max}
          name="Hit points"
          onChange={setCurrentHealth}
          value={currentHealth}
        />
        <StatBar
          colour="green"
          max={sanity.max}
          name="Morale"
          onChange={setCurrentSanity}
          value={currentSanity}
        />
        <StatBar
          colour="blue"
          max={stamina.max}
          name="Stamina"
          onChange={setCurrentStamina}
          value={currentStamina}
        />
      </CardContent>
    </Card>
  );
};