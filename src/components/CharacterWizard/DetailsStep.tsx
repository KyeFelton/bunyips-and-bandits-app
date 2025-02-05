import { useAtom } from "jotai";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";
import {
  nameAtom,
  genderAtom,
  ageAtom,
  personalityAtom,
  languagesAtom,
} from "../../state/primitives";

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

export const DetailsStep = () => {
  const [name, setName] = useAtom(nameAtom);
  const [gender, setGender] = useAtom(genderAtom);
  const [age, setAge] = useAtom(ageAtom);
  const [personality, setPersonality] = useAtom(personalityAtom);
  const [selectedLanguages, setLanguages] = useAtom(languagesAtom);

  const handleLanguageAdd = (language: string) => {
    if (!selectedLanguages.includes(language)) {
      setLanguages([...selectedLanguages, language]);
    }
  };

  const handleLanguageRemove = (language: string) => {
    setLanguages(selectedLanguages.filter((l) => l !== language));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter character name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Input
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
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
          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
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
            <SelectValue placeholder="Add language" />
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
          onChange={(e) => setPersonality(e.target.value)}
          placeholder="Describe your character's personality and motivations..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
};
