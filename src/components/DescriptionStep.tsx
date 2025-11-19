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
import { X, Image } from "lucide-react";
import {
  nameAtom,
  genderAtom,
  ageAtom,
  backgroundAtom,
  personalityAtom,
  languagesAtom,
  imageAtom,
  speciesAtom,
  ancestryAtom,
} from "./../state/character";
import { getSpeciesImage } from "./../utils/speciesImages";

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

const genders = ["Male", "Female", "Non-binary"];
const CUSTOM_GENDER_OPTION = "Let me type...";

export const DescriptionStep = () => {
  const [name, setName] = useAtom(nameAtom);
  const species = useAtomValue(speciesAtom);
  const ancestry = useAtomValue(ancestryAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [background, setBackground] = useAtom(backgroundAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const [selectedLanguages, setLanguages] = useAtom(languagesAtom);
  const [image, setImage] = useAtom(imageAtom);

  const [isCustomGender, setIsCustomGender] = useState(false);
  const [customGenderValue, setCustomGenderValue] = useState("");

  // Initialize custom gender state if character has a custom gender value
  useEffect(() => {
    if (gender && !genders.includes(gender) && gender !== CUSTOM_GENDER_OPTION) {
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

  const handleLanguageAdd = (language: string) => {
    if (!selectedLanguages.includes(language)) {
      setLanguages([...selectedLanguages, language]);
    }
  };

  const handleLanguageRemove = (language: string) => {
    setLanguages(selectedLanguages.filter((l) => l !== language));
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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-md text-muted-foreground">
        <div>
          Define your character's name, appearance, attributes and backstory to
          bring them to life.
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter character name"
          className="max-w-[350px]"
        />
      </div>

      <div className="space-y-2">
        <Label>Character Image</Label>
        <div className="relative group w-64 h-64">
          <label htmlFor="image-upload" className="cursor-pointer">
            <img
              src={image ?? getSpeciesImage(species, ancestry || "Englorian")}
              alt="character"
              className="w-64 h-64 rounded-lg object-cover"
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

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <div className="flex gap-2">
          <Select
            value={isCustomGender ? CUSTOM_GENDER_OPTION : gender}
            onValueChange={handleGenderChange}
          >
            <SelectTrigger className="w-[200px]" id="gender">
              <SelectValue placeholder="Select gender" />
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
          {isCustomGender && (
            <Input
              id="gender-custom"
              value={customGenderValue}
              onChange={(e) => handleCustomGenderChange(e.target.value)}
              placeholder="Enter custom gender"
              className="w-[200px]"
            />
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          min="0"
          value={age || ""}
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
          placeholder="Enter age"
          className="w-[120px]"
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
          <SelectTrigger className="w-[200px]" id="languages">
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
        <Label htmlFor="background">Background</Label>
        <Textarea
          id="background"
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          placeholder="Describe your character's background and history..."
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="personality">Personality & Motivation</Label>
        <Textarea
          id="personality"
          value={personality}
          onChange={(e) => setPersonality(e.target.value)}
          placeholder="Describe your character's personality and motivations..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};
