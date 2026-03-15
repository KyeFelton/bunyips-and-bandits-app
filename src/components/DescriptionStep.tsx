import { useAtom, useAtomValue } from "jotai";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Image, Plus, Shuffle, X } from "lucide-react";
import {
  ageAtom,
  ancestryAtom,
  backstoryAtom,
  genderAtom,
  imageAtom,
  languagesAtom,
  nameAtom,
  personalityAtom,
  speciesAtom,
} from "./../state/character";
import { getSpeciesImage } from "./../utils/speciesImages";

const genders = ["Male", "Female", "Non-binary"];
const CUSTOM_GENDER_OPTION = "Let me type...";

const personalities = [
  "Quiet and watchful",
  "Loud and boisterous",
  "Warm and welcoming",
  "Cold and calculating",
  "Endlessly curious",
  "Deeply suspicious",
  "Relentlessly optimistic",
  "Dry and deadpan",
  "Impulsive and excitable",
  "Calm under pressure",
  "Fiercely loyal",
  "Charmingly unreliable",
  "Blunt to a fault",
  "Gentle and patient",
  "Easily distracted",
  "Intensely competitive",
  "Laid-back and unbothered",
  "Anxious but capable",
  "Secretive and guarded",
  "Infectiously enthusiastic",
];

const virtues = [
  "Brave",
  "Honest",
  "Loyal",
  "Compassionate",
  "Patient",
  "Generous",
  "Wise",
  "Resourceful",
  "Humble",
  "Resilient",
  "Fair-minded",
  "Protective",
  "Disciplined",
  "Adaptable",
  "Dependable",
  "Empathetic",
  "Creative",
  "Courageous",
  "Tenacious",
  "Selfless",
];

const flaws = [
  "Reckless",
  "Stubborn",
  "Jealous",
  "Cowardly",
  "Dishonest",
  "Greedy",
  "Hot-tempered",
  "Holds grudges",
  "Overconfident",
  "Impulsive",
  "Self-destructive",
  "Manipulative",
  "Avoids conflict",
  "Chronically unlucky",
  "Can't ask for help",
  "Easily distracted",
  "Overly suspicious",
  "Cruel streak",
  "Compulsive liar",
  "Drinks too much",
];

const motivations = [
  "Revenge",
  "Redemption",
  "Wealth",
  "Fame",
  "Love",
  "Justice",
  "Survival",
  "Belonging",
  "Knowledge",
  "Power",
  "Freedom",
  "Protecting family",
  "Keeping a promise",
  "Proving themselves",
  "Finding the truth",
  "Atoning for the past",
  "Adventure",
  "Duty",
  "Legacy",
  "Pure stubbornness",
];

const pickRandom = <T,>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

const composePersonality = (
  personality: string,
  virtue: string,
  flaw: string,
  motivation: string,
): string =>
  [
    personality && `${personality}`,
    virtue && `${virtue}`,
    flaw && `${flaw}`,
    motivation && `Motivated by ${motivation.toLocaleLowerCase()}.`,
  ]
    .filter(Boolean)
    .join(". ");

type PersonalityMode = "write" | "pick";

export const DescriptionStep = () => {
  const [name, setName] = useAtom(nameAtom);
  const species = useAtomValue(speciesAtom);
  const ancestry = useAtomValue(ancestryAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [backstory, setBackstory] = useAtom(backstoryAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const [selectedLanguages, setLanguages] = useAtom(languagesAtom);
  const [image, setImage] = useAtom(imageAtom);

  const [isCustomGender, setIsCustomGender] = useState(false);
  const [customGenderValue, setCustomGenderValue] = useState("");
  const [customLanguageInput, setCustomLanguageInput] = useState("");

  const [personalityMode, setPersonalityMode] =
    useState<PersonalityMode>("write");
  const [pickedPersonality, setPickedPersonality] = useState("");
  const [pickedVirtue, setPickedVirtue] = useState("");
  const [pickedFlaw, setPickedFlaw] = useState("");
  const [pickedMotivation, setPickedMotivation] = useState("");

  // Initialize custom gender state if character has a custom gender value
  useEffect(() => {
    if (
      gender &&
      !genders.includes(gender) &&
      gender !== CUSTOM_GENDER_OPTION
    ) {
      setIsCustomGender(true);
      setCustomGenderValue(gender);
    }
  }, [gender]);

  const handleGenderChange = (value: string) => {
    if (value === CUSTOM_GENDER_OPTION) {
      setIsCustomGender(true);
      setGender(CUSTOM_GENDER_OPTION);
      setCustomGenderValue("");
    } else {
      setIsCustomGender(false);
      setGender(value);
      setCustomGenderValue("");
    }
  };

  const handleCustomGenderChange = (value: string) => {
    setCustomGenderValue(value);
    if (value.trim()) {
      setGender(value);
    }
  };

  const handleLanguageRemove = (language: string) => {
    setLanguages(selectedLanguages.filter((l) => l !== language));
  };

  const handleLanguageAdd = () => {
    const trimmedLanguage = customLanguageInput.trim();
    if (trimmedLanguage && !selectedLanguages.includes(trimmedLanguage)) {
      setLanguages([...selectedLanguages, trimmedLanguage]);
      setCustomLanguageInput("");
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target?.result as string;
        setImage(image);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePickChange = (
    field: "personality" | "virtue" | "flaw" | "motivation",
    value: string,
  ) => {
    const next = {
      personality: pickedPersonality,
      virtue: pickedVirtue,
      flaw: pickedFlaw,
      motivation: pickedMotivation,
      [field]: value,
    };
    if (field === "personality") setPickedPersonality(value);
    if (field === "virtue") setPickedVirtue(value);
    if (field === "flaw") setPickedFlaw(value);
    if (field === "motivation") setPickedMotivation(value);
    setPersonality(
      composePersonality(
        next.personality,
        next.virtue,
        next.flaw,
        next.motivation,
      ),
    );
  };

  const handleRandomise = () => {
    const p = pickRandom(personalities);
    const v = pickRandom(virtues);
    const f = pickRandom(flaws);
    const m = pickRandom(motivations);
    setPickedPersonality(p);
    setPickedVirtue(v);
    setPickedFlaw(f);
    setPickedMotivation(m);
    setPersonality(composePersonality(p, v, f, m));
  };

  const handleModeChange = (mode: PersonalityMode) => {
    setPersonalityMode(mode);
    if (mode === "pick") {
      setPickedPersonality("");
      setPickedVirtue("");
      setPickedFlaw("");
      setPickedMotivation("");
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-md text-muted-foreground">
        Define your character's name, appearance, attributes and backstory to
        bring them to life.
      </p>

      {/* Main grid layout: image/stats on left, details on right */}
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 lg:gap-6">
        {/* Left column: Image and basic stats */}
        <div className="space-y-4">
          {/* Character Image */}
          <div className="space-y-2">
            <Label>Character Image</Label>
            <div className="relative group w-full aspect-square max-w-[300px]">
              <label htmlFor="image-upload" className="cursor-pointer">
                <img
                  src={image ?? getSpeciesImage(species, ancestry)}
                  alt="character"
                  className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/50 rounded-lg">
                  <div className="flex items-center justify-center px-4 py-2 rounded-md text-primary-foreground transition-colors">
                    <Image className="h-5 w-5 mr-2" />
                    Change image
                  </div>
                </div>
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter character name"
            />
          </div>

          {/* Gender and Age in a compact grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select
                value={isCustomGender ? CUSTOM_GENDER_OPTION : gender}
                onValueChange={handleGenderChange}
              >
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  {genders.map((g) => (
                    <SelectItem key={g} value={g}>
                      {g}
                    </SelectItem>
                  ))}
                  <SelectItem value={CUSTOM_GENDER_OPTION}>
                    {CUSTOM_GENDER_OPTION}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                min="0"
                value={age || ""}
                onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                placeholder="Age"
              />
            </div>
          </div>

          {/* Custom gender input if needed */}
          {isCustomGender && (
            <div className="space-y-2">
              <Label htmlFor="gender-custom">Custom Gender</Label>
              <Input
                id="gender-custom"
                value={customGenderValue}
                onChange={(e) => handleCustomGenderChange(e.target.value)}
                placeholder="Enter custom gender"
              />
            </div>
          )}

          {/* Languages */}
          <div className="space-y-2">
            <Label htmlFor="languages">Languages</Label>
            <div className="flex items-center gap-2">
              <Input
                id="languages"
                value={customLanguageInput}
                onChange={(e) => setCustomLanguageInput(e.target.value)}
                placeholder="Enter a language"
                className="flex-1"
              />
              <Button
                type="button"
                size="sm"
                onClick={handleLanguageAdd}
                disabled={!customLanguageInput.trim()}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {selectedLanguages.length !== 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
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
          </div>
        </div>

        {/* Right column: Backstory and personality */}
        <div className="space-y-4 md:space-y-8">
          <div className="space-y-2">
            <Label htmlFor="backstory">Backstory</Label>
            <Textarea
              id="backstory"
              value={backstory}
              onChange={(e) => setBackstory(e.target.value)}
              placeholder="Describe your character's backstory and history..."
              className="min-h-[140px] lg:min-h-[180px]"
            />
          </div>

          {/* Personality & Motivation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <Label>Personality & Motive</Label>
              <div className="flex rounded-md border border-input overflow-hidden shrink-0">
                <button
                  type="button"
                  onClick={() => handleModeChange("pick")}
                  className={`px-3 py-1 text-sm transition-colors ${
                    personalityMode === "pick"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Select
                </button>
                <button
                  type="button"
                  onClick={() => handleModeChange("write")}
                  className={`px-3 py-1 text-sm transition-colors ${
                    personalityMode === "write"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Custom
                </button>
              </div>
            </div>

            {personalityMode === "write" ? (
              <Textarea
                id="personality"
                value={personality}
                onChange={(e) => setPersonality(e.target.value)}
                placeholder="Describe your character's personality and motivations..."
                className="min-h-[140px] lg:min-h-[180px]"
              />
            ) : (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">
                      Personality
                    </Label>
                    <Select
                      value={pickedPersonality}
                      onValueChange={(v) => handlePickChange("personality", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {personalities.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">
                      Virtue
                    </Label>
                    <Select
                      value={pickedVirtue}
                      onValueChange={(v) => handlePickChange("virtue", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {virtues.map((v) => (
                          <SelectItem key={v} value={v}>
                            {v}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">
                      Flaw
                    </Label>
                    <Select
                      value={pickedFlaw}
                      onValueChange={(v) => handlePickChange("flaw", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {flaws.map((f) => (
                          <SelectItem key={f} value={f}>
                            {f}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label className="text-xs text-muted-foreground">
                      Motive
                    </Label>
                    <Select
                      value={pickedMotivation}
                      onValueChange={(v) => handlePickChange("motivation", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        {motivations.map((m) => (
                          <SelectItem key={m} value={m}>
                            {m}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleRandomise}
                  className="gap-2"
                >
                  <Shuffle className="h-4 w-4" />
                  Randomise
                </Button>

                {personality && (
                  <p className="text-sm text-muted-foreground italic border-l-2 border-border pl-3">
                    {personality}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
