import { useAtom, useAtomValue } from 'jotai';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { StatBar } from '../StatBar';
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Health</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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