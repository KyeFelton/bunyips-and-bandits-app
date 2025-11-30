import { useState, useEffect } from "react";
import { useAtom, useSetAtom } from "jotai";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Image as ImageIcon } from "lucide-react";
import {
  nameAtom,
  imageAtom,
  speciesAtom,
  originAtom,
  levelAtom,
} from "../state/character";
import { saveFileAtom, focalCharacterIdAtom } from "../state/saveFile";
import { getSpeciesImage } from "../utils/speciesImages";
import { LevelUpModal } from "./LevelUpModal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditNameDialog = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useAtom(nameAtom);
  const [image, setImage] = useAtom(imageAtom);
  const [species] = useAtom(speciesAtom);
  const [origin] = useAtom(originAtom);
  const [level, setLevel] = useAtom(levelAtom);
  const setSaveFile = useSetAtom(saveFileAtom);
  const [focalCharacterId] = useAtom(focalCharacterIdAtom);

  const [pendingName, setPendingName] = useState("");
  const [pendingImage, setPendingImage] = useState<string | undefined>(
    undefined
  );
  const [pendingLevel, setPendingLevel] = useState(level);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPendingName(name);
      setPendingImage(image);
      setPendingLevel(level);
    }
  }, [isOpen, name, image, level]);

  const handleSave = () => {
    const finalName = pendingName.trim() === "" ? "No name" : pendingName;
    setName(finalName);
    setImage(pendingImage);

    if (focalCharacterId) {
      setSaveFile((prev) => ({
        ...prev,
        characters: {
          ...prev.characters,
          [focalCharacterId]: {
            ...prev.characters[focalCharacterId],
            name: finalName,
            image: pendingImage,
          },
        },
      }));
    }

    // If level changed, open level up modal
    if (pendingLevel > level) {
      setLevel(pendingLevel);
      setIsLevelUpModalOpen(true);
    } else {
      onClose();
    }
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

  const handleLevelUpModalClose = (success: boolean) => {
    if (!success) {
      setLevel(level);
    }
    setIsLevelUpModalOpen(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Name & Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
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
            <Label htmlFor="level">Level</Label>
            <Select
              value={pendingLevel.toString()}
              onValueChange={(value) => setPendingLevel(parseInt(value))}
            >
              <SelectTrigger className="w-[120px]" id="level">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Array.from(
                  { length: 10 - level + 1 },
                  (_, i) => level + i
                ).map((lvl) => (
                  <SelectItem key={lvl} value={lvl.toString()}>
                    {lvl}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              You cannot go back a level.
            </p>
          </div>

          <div className="space-y-2">
            <Label>Character Image</Label>
            <div className="relative group w-64 h-64 mx-auto">
              <label htmlFor="image-upload" className="cursor-pointer">
                <img
                  src={
                    pendingImage ?? image ?? getSpeciesImage(species, origin)
                  }
                  alt="character"
                  className="w-64 h-64 rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                  <div className="flex items-center justify-center px-4 py-2 rounded-md text-white transition-colors">
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
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
      <LevelUpModal
        open={isLevelUpModalOpen}
        onClose={handleLevelUpModalClose}
        preventCancel={true}
      />
    </Dialog>
  );
};
