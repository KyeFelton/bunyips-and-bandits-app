import { useState, useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { X, Plus } from "lucide-react";
import {
  backgroundAtom,
  biographyAtom,
  personalityAtom,
  languagesAtom,
  ageAtom,
  genderAtom,
  ancestryAtom,
  speciesDataAtom,
} from "../state/character";
import { AllBackgrounds } from "../data/backgrounds";

const genders = ["Male", "Female", "Non-binary"];
const CUSTOM_GENDER_OPTION = "Let me type...";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditDescriptionDialog = ({ isOpen, onClose }: Props) => {
  const [background, setBackground] = useAtom(backgroundAtom);
  const [biography, setBiography] = useAtom(biographyAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const [selectedLanguages, setLanguages] = useAtom(languagesAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const ancestry = useAtomValue(ancestryAtom);
  const species = useAtomValue(speciesDataAtom);

  const [pendingBackground, setPendingBackground] = useState("");
  const [pendingBiography, setPendingBiography] = useState("");
  const [pendingPersonality, setPendingPersonality] = useState("");
  const [pendingLanguages, setPendingLanguages] = useState<string[]>([]);
  const [pendingAge, setPendingAge] = useState(0);
  const [pendingGender, setPendingGender] = useState("");
  const [isCustomGender, setIsCustomGender] = useState(false);
  const [customGenderValue, setCustomGenderValue] = useState("");
  const [customLanguageInput, setCustomLanguageInput] = useState("");

  useEffect(() => {
    if (isOpen) {
      setPendingBackground(background);
      setPendingBiography(biography);
      setPendingPersonality(personality);
      setPendingLanguages([...selectedLanguages]);
      setPendingAge(age);
      setPendingGender(gender);

      // Initialize custom gender state
      if (
        gender &&
        !genders.includes(gender) &&
        gender !== CUSTOM_GENDER_OPTION
      ) {
        setIsCustomGender(true);
        setCustomGenderValue(gender);
      } else {
        setIsCustomGender(false);
        setCustomGenderValue("");
      }
    }
  }, [
    isOpen,
    background,
    biography,
    personality,
    selectedLanguages,
    age,
    gender,
  ]);

  const handleSave = () => {
    const finalGender = isCustomGender ? customGenderValue : pendingGender;

    setBackground(pendingBackground);
    setBiography(pendingBiography);
    setPersonality(pendingPersonality);
    setLanguages(pendingLanguages);
    setAge(pendingAge);
    setGender(finalGender);

    onClose();
  };

  const handleLanguageAdd = () => {
    const trimmedLanguage = customLanguageInput.trim();
    if (trimmedLanguage && !pendingLanguages.includes(trimmedLanguage)) {
      setPendingLanguages([...pendingLanguages, trimmedLanguage]);
      setCustomLanguageInput("");
    }
  };

  const handleLanguageRemove = (language: string) => {
    setPendingLanguages(pendingLanguages.filter((l) => l !== language));
  };

  const handleGenderChange = (value: string) => {
    if (value === CUSTOM_GENDER_OPTION) {
      setIsCustomGender(true);
      setPendingGender(CUSTOM_GENDER_OPTION);
      setCustomGenderValue("");
    } else {
      setIsCustomGender(false);
      setPendingGender(value);
      setCustomGenderValue("");
    }
  };

  const handleCustomGenderChange = (value: string) => {
    setCustomGenderValue(value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Description</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {/* Read-only fields */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ancestry">Ancestry</Label>
              <Input
                id="ancestry"
                value={ancestry}
                disabled
                className="bg-muted cursor-not-allowed text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="species">Species</Label>
              <Input
                id="species"
                value={species.name}
                disabled
                className="bg-muted cursor-not-allowed text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <Input
                id="size"
                value={species.size || "-"}
                disabled
                className="bg-muted cursor-not-allowed text-sm"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground -mt-2">
            Ancestry, Species, and Size are set during character creation and
            cannot be changed.
          </p>

          {/* Editable fields */}
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <div className="flex gap-2">
              <Select
                value={isCustomGender ? CUSTOM_GENDER_OPTION : pendingGender}
                onValueChange={handleGenderChange}
              >
                <SelectTrigger className="w-[154px]" id="gender">
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
                  className="w-[174px]"
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
              value={pendingAge || ""}
              onChange={(e) => setPendingAge(parseInt(e.target.value) || 0)}
              placeholder="Enter age"
              className="w-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="languages">Languages</Label>
            <div className="flex gap-2">
              <Input
                id="languages"
                value={customLanguageInput}
                onChange={(e) => setCustomLanguageInput(e.target.value)}
                placeholder="Type language..."
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
            {pendingLanguages.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {pendingLanguages.map((lang) => (
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

          <div className="space-y-2">
            <Label htmlFor="background">Background</Label>
            <Select
              value={pendingBackground}
              onValueChange={setPendingBackground}
            >
              <SelectTrigger id="background">
                <SelectValue placeholder="Select a background" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(AllBackgrounds).map((bg) => (
                  <SelectItem key={bg.name} value={bg.name}>
                    {bg.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {pendingBackground &&
              AllBackgrounds[
                pendingBackground as keyof typeof AllBackgrounds
              ] && (
                <p className="text-xs text-muted-foreground">
                  {
                    AllBackgrounds[
                      pendingBackground as keyof typeof AllBackgrounds
                    ].description
                  }{" "}
                  <span className="font-semibold">
                    Expertise:{" "}
                    {AllBackgrounds[
                      pendingBackground as keyof typeof AllBackgrounds
                    ].expertiseSkills.join(", ")}
                  </span>
                </p>
              )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="biography">Biography</Label>
            <Textarea
              id="biography"
              value={pendingBiography}
              onChange={(e) => setPendingBiography(e.target.value)}
              placeholder="Describe your character's backstory and history..."
              className="min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="personality">Personality & Motivation</Label>
            <Textarea
              id="personality"
              value={pendingPersonality}
              onChange={(e) => setPendingPersonality(e.target.value)}
              placeholder="Describe your character's personality and motivations..."
              className="min-h-[120px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
