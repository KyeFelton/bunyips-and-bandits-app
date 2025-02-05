import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";
import { Minotaur, Jeli, Pixie } from "../models/species";
import {
  speciesAtom,
  genderAtom,
  ageAtom,
  levelAtom,
  languagesAtom,
  personalityAtom,
  currentHealthAtom,
  currentSanityAtom,
  currentStaminaAtom,
} from "../state/primitives";

const species = [Minotaur, Jeli, Pixie];
const languages = [
  "Afaen",
  "Croakish",
  "Desert Tongue",
  "Dharrigal",
  "Englorian",
  "Go",
  "Squawk",
  "Tolrusian",
];

export const CharacterDetailsCard = () => {
  const [selectedSpecies, setSpecies] = useAtom(speciesAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const [age, setAge] = useAtom(ageAtom);
  const level = useAtomValue(levelAtom);
  const [selectedLanguages, setLanguages] = useAtom(languagesAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const setCurrentHealth = useSetAtom(currentHealthAtom);
  const setCurrentSanity = useSetAtom(currentSanityAtom);
  const setCurrentStamina = useSetAtom(currentStaminaAtom);

  const handleSpeciesChange = (speciesName: string) => {
    const selectedSpecies = species.find((s) => s.name === speciesName);
    if (!selectedSpecies) {
      throw new Error(`Failed to find species: ${species}`);
    }
    setSpecies(selectedSpecies.name);
    setCurrentHealth(
      selectedSpecies.health.initial +
        selectedSpecies.health.increments * (level - 1)
    );
    setCurrentSanity(
      selectedSpecies.sanity.initial +
        selectedSpecies.sanity.increments * (level - 1)
    );
    setCurrentStamina(
      selectedSpecies.stamina.initial +
        selectedSpecies.stamina.increments * (level - 1)
    );
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const age = parseInt(event.target.value) || 0;
    setAge(age);
  };

  const handleLanguageAdd = (language: string) => {
    if (!selectedLanguages.includes(language)) {
      setLanguages([...selectedLanguages, language]);
    }
  };

  const handleLanguageRemove = (language: string) => {
    setLanguages(selectedLanguages.filter((l) => l !== language));
  };

  const handlePersonalityChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPersonality(event.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Character Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="species">Species</Label>
          <Select value={selectedSpecies} onValueChange={handleSpeciesChange}>
            <SelectTrigger id="species">
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
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Input
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            placeholder="Enter gender"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            min="0"
            value={age || ""}
            onChange={handleAgeChange}
            placeholder="Enter age"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="languages">Languages</Label>
          {selectedLanguages.length !== 0 && (
            <div className="flex flex-wrap gap-2 pb-1">
              {selectedLanguages.map((lang) => (
                <Badge key={lang} variant="secondary" className="gap-1">
                  {lang}
                  <button
                    onClick={() => handleLanguageRemove(lang)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}
          <Select onValueChange={handleLanguageAdd}>
            <SelectTrigger id="languages">
              <SelectValue placeholder="Add language">Add language</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {languages
                .filter((lang) => !selectedLanguages.includes(lang))
                .map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="personality">Personality & Motivation</Label>
          <Textarea
            id="personality"
            value={personality}
            onChange={handlePersonalityChange}
            placeholder="Describe your character's personality and motivations..."
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
    </Card>
  );
};
