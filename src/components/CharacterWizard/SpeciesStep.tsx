import { useAtom } from "jotai";
import { speciesAtom } from "../../state/primitives";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Card, CardContent } from "../ui/card";
import { Minotaur, Jeli, Pixie } from "../../models/species";
import { MovementType } from "../../enums/MovementType";
import { DamageType } from "../../enums/DamageType";
import { SkillType } from "../../enums/SkillType";

const species = [Minotaur, Jeli, Pixie];

export const SpeciesStep = () => {
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);

  const currentSpecies = species.find((s) => s.name === selectedSpecies);

  return (
    <div className="space-y-6">
      <Select value={selectedSpecies} onValueChange={setSpecies}>
        <SelectTrigger>
          <SelectValue placeholder="Select species" />
        </SelectTrigger>
        <SelectContent>
          {species.map((s) => (
            <SelectItem key={s.name} value={s.name}>
              {s.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {currentSpecies && (
        <Card>
          <CardContent className="pt-6 space-y-6">
            {/* Base Stats */}
            <div>
              <h3 className="font-semibold mb-2">Base Stats</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Health</div>
                  <div>
                    {currentSpecies.health.initial} (+
                    {currentSpecies.health.increments}/level)
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Sanity</div>
                  <div>
                    {currentSpecies.sanity.initial} (+
                    {currentSpecies.sanity.increments}/level)
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Stamina</div>
                  <div>
                    {currentSpecies.stamina.initial} (+
                    {currentSpecies.stamina.increments}/level)
                  </div>
                </div>
              </div>
            </div>

            {/* Movement */}
            <div>
              <h3 className="font-semibold mb-2">Movement</h3>
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(currentSpecies.speed).map(([type, value]) => (
                  <div key={type}>
                    <div className="text-sm text-muted-foreground">{type}</div>
                    <div>{value}m</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Armour */}
            <div>
              <h3 className="font-semibold mb-2">Armour</h3>
              <div className="grid grid-cols-5 gap-4">
                {Object.entries(currentSpecies.armour).map(([type, value]) => (
                  <div key={type}>
                    <div className="text-sm text-muted-foreground">{type}</div>
                    <div>{value > 0 ? `+${value}` : value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-semibold mb-2">Starting Skills</h3>
              <div className="grid grid-cols-4 gap-4">
                {Object.entries(currentSpecies.skillLevels)
                  .filter(([_, value]) => value > 0)
                  .map(([skill, value]) => (
                    <div key={skill}>
                      <div className="text-sm text-muted-foreground">
                        {skill}
                      </div>
                      <div>{value}</div>
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
