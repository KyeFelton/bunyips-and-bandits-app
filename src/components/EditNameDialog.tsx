import { useState, useEffect } from "react";
import { useAtom } from "jotai";
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
import { Image as ImageIcon } from "lucide-react";
import {
  nameAtom,
  imageAtom,
  speciesAtom,
  originAtom,
} from "../state/character";
import { getSpeciesImage } from "../utils/speciesImages";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const EditNameDialog = ({ isOpen, onClose }: Props) => {
  const [name, setName] = useAtom(nameAtom);
  const [image, setImage] = useAtom(imageAtom);
  const [species] = useAtom(speciesAtom);
  const [origin] = useAtom(originAtom);

  const [pendingName, setPendingName] = useState("");
  const [pendingImage, setPendingImage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (isOpen) {
      setPendingName(name);
      setPendingImage(image);
    }
  }, [isOpen, name, image]);

  const handleSave = () => {
    const finalName = pendingName.trim() === "" ? "No name" : pendingName;
    setName(finalName);
    setImage(pendingImage);
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
    </Dialog>
  );
};
