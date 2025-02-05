import { useAtom } from "jotai";
import { imageAtom } from "../state/primitives";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import defaultCharacterImage from "../images/character.svg";

export const CharacterImageCard = () => {
  const [image, setImage] = useAtom(imageAtom);

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
    <Card>
      <CardHeader>
        <CardTitle>Portrait</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative group">
          <label htmlFor="image-upload">
            <img
              src={image || defaultCharacterImage}
              alt="character"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg cursor-pointer">
              <div className="flex items-center justify-center px-4 py-2 rounded-md text-white transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faImage} size="lg" className="mr-2" />
                Change Image
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
      </CardContent>
    </Card>
  );
};
