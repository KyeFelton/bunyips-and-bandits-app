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
import { X, Image, Plus } from "lucide-react";
import {
  nameAtom,
  genderAtom,
  ageAtom,
  backgroundAtom,
  personalityAtom,
  languagesAtom,
  imageAtom,
  speciesAtom,
  originAtom,
} from "./../state/character";
import { getSpeciesImage } from "./../utils/speciesImages";

const genders = ["Male", "Female", "Non-binary"];
const CUSTOM_GENDER_OPTION = "Let me type...";

export const DescriptionStep = () => {
  const [name, setName] = useAtom(nameAtom);
  const species = useAtomValue(speciesAtom);
  const origin = useAtomValue(originAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [background, setBackground] = useAtom(backgroundAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const [selectedLanguages, setLanguages] = useAtom(languagesAtom);
  const [image, setImage] = useAtom(imageAtom);

  const [isCustomGender, setIsCustomGender] = useState(false);
  const [customGenderValue, setCustomGenderValue] = useState("");
  const [customLanguageInput, setCustomLanguageInput] = useState("");

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
    // Only update the main gender atom if there's a value, otherwise keep "Let me type..."
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

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
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
                  src={image ?? getSpeciesImage(species, origin)}
                  alt="character"
                  className="w-full h-full rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                  <div className="flex items-center justify-center px-4 py-2 rounded-md text-white transition-colors">
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

        {/* Right column: Background and personality */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="background">Background</Label>
            <Textarea
              id="background"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              placeholder="Describe your character's background and history..."
              className="min-h-[180px] lg:min-h-[256px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="personality">Personality & Motivation</Label>
            <Textarea
              id="personality"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              placeholder="Describe your character's personality and motivations..."
              className="min-h-[180px] lg:min-h-[256px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
