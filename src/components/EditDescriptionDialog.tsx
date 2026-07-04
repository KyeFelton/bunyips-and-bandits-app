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
import { Label } from "./ui/label";
import { Image as ImageIcon, Plus, X } from "lucide-react";
import {
  nameAtom,
  imageAtom,
  kinAtom,
  ageAtom,
  backstoryAtom,
  genderAtom,
  languagesAtom,
  personalityAtom,
} from "../state/character";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";

const genders = ["Male", "Female", "Non-binary"];
const CUSTOM_GENDER_OPTION = "Let me type...";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditDescriptionDialog = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useAtom(nameAtom);
  const [image, setImage] = useAtom(imageAtom);
  const kin = useAtomValue(kinAtom);
  const [backstory, setBackstory] = useAtom(backstoryAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const [selectedLanguages, setLanguages] = useAtom(languagesAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [gender, setGender] = useAtom(genderAtom);

  const [pendingName, setPendingName] = useState("");
  const [pendingImage, setPendingImage] = useState<string | undefined>(
    undefined,
  );
  const [pendingBackstory, setPendingBackstory] = useState("");
  const [pendingPersonality, setPendingPersonality] = useState("");
  const [pendingLanguages, setPendingLanguages] = useState<string[]>([]);
  const [pendingAge, setPendingAge] = useState(0);
  const [pendingGender, setPendingGender] = useState("");
  const [isCustomGender, setIsCustomGender] = useState(false);
  const [customGenderValue, setCustomGenderValue] = useState("");
  const [customLanguageInput, setCustomLanguageInput] = useState("");

  useEffect(() => {
    if (isOpen) {
      setPendingName(name);
      setPendingImage(image);
      setPendingBackstory(backstory);
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
    name,
    image,
    backstory,
    personality,
    selectedLanguages,
    age,
    gender,
  ]);

  const handleSave = () => {
    const finalName = pendingName.trim() === "" ? "No name" : pendingName;
    const finalGender = isCustomGender ? customGenderValue : pendingGender;
    setName(finalName);
    setImage(pendingImage);
    setBackstory(pendingBackstory);
    setPersonality(pendingPersonality);
    setLanguages(pendingLanguages);
    setAge(pendingAge);
    setGender(finalGender);
    onClose();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setPendingImage(imageData);
      };
      reader.readAsDataURL(file);
    }
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Character</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4 max-h-[60vh] overflow-y-auto px-1">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={pendingName}
              onChange={(e) => setPendingName(e.target.value)}
              placeholder="Enter character name"
            />
          </div>

          <div className="space-y-2">
            <Label>Character Image</Label>
            <div className="relative group w-64 h-64 mx-auto">
              <label htmlFor="image-upload" className="cursor-pointer">
                <img
                  src={pendingImage ?? image ?? kin.imageSrc}
                  alt="character"
                  className="w-64 h-64 rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/50 rounded-lg">
                  <div className="flex items-center justify-center px-4 py-2 rounded-md text-primary-foreground transition-colors">
                    <ImageIcon className="h-5 w-5 mr-2" />
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
            <Label htmlFor="backstory">Backstory</Label>
            <Textarea
              id="backstory"
              value={pendingBackstory}
              onChange={(e) => setPendingBackstory(e.target.value)}
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
