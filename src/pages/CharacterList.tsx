import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useAtom } from "jotai";
import { downloadSaveFile, loadSaveFile } from "../utils/saveFile";
import { getCharacterEditorRoute, getCharacterSheetRoute } from "../routes";
import { Upload, MoreVertical, CirclePlus, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { ErrorDialog } from "../components/ErrorDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { saveFileAtom } from "../state/saveFile";
import { randomString } from "../utils/randomString";
import { defaultCharacter } from "../models/saveFile";
import { getSpeciesImage } from "../utils/speciesImages";

export function CharactersPage() {
  const navigate = useNavigate();
  const [saveFile, setSaveFile] = useAtom(saveFileAtom);
  const [characterToDelete, setCharacterToDelete] = useState<
    string | undefined
  >();
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorTitle, setErrorTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImport = async () => {
    await loadSaveFile(setSaveFile, undefined, (title, message) => {
      setErrorTitle(title);
      setErrorMessage(message);
      setErrorDialogOpen(true);
    });
  };

  const handleCreateNewCharacter = () => {
    const id = randomString(10);
    setSaveFile((prev) => {
      return {
        ...prev,
        characters: { ...prev.characters, [id]: defaultCharacter },
      };
    });
    navigate(getCharacterEditorRoute(id));
  };

  const handleSelectCharacter = (id: string) => {
    navigate(getCharacterSheetRoute(id));
  };

  const handleDeleteCharacter = (id: string) => {
    setCharacterToDelete(id);
  };

  const confirmDeleteCharacter = () => {
    if (!characterToDelete) {
      return;
    }
    setSaveFile((prev) => {
      const characters = { ...prev.characters };
      delete characters[characterToDelete];
      return { ...prev, characters: characters };
    });
    setCharacterToDelete(undefined);
  };

  const handleDownload = () => {
    downloadSaveFile(saveFile);
  };

  return (
    <motion.div
      className="min-h-full container mx-auto py-8 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center pb-8">
        <h1 className="text-3xl font-bold text-primary-foreground">
          Characters
        </h1>
        <div className="flex gap-2">
          <Button className="hidden md:flex" onClick={handleImport}>
            <Upload className="h-4 w-4 mr-2" />
            Load
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 z-20">
        {Object.entries(saveFile.characters).map(([id, character]) => {
          return (
            <Card
              className="cursor-pointer hover:shadow-md hover:scale-105 transition-all"
              onClick={() => handleSelectCharacter(id)}
              key={id}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-2 right-2 z-10">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteCharacter(id);
                          }}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  {
                    <img
                      src={
                        character.image ??
                        getSpeciesImage(character.species, character.origin)
                      }
                      alt={character.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  }
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start p-4">
                <h3 className="font-semibold text-lg">{character.name}</h3>
                <div className="text-sm text-muted-foreground">
                  Level {character.level} {character.species}
                </div>
              </CardFooter>
            </Card>
          );
        })}
        <Card
          className="cursor-pointer hover:shadow-lg hover:scale-105 transition-all border-2 border-dashed border-primary/40 hover:border-primary/60"
          onClick={handleCreateNewCharacter}
        >
          <CardContent className="p-0 h-48 md:min-h-full flex items-center justify-center rounded-t-lg text-muted-foreground hover:text-foreground">
            <div className="flex flex-col items-center gap-3">
              <CirclePlus className="h-14 w-14" />
              <span className="text-lg font-bold ">New Character</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {characterToDelete && (
        <Dialog open={characterToDelete !== undefined}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Character</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete{" "}
                <strong>{saveFile.characters[characterToDelete].name}</strong>?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="destructive" onClick={confirmDeleteCharacter}>
                Delete
              </Button>
              <Button
                variant="outline"
                onClick={() => setCharacterToDelete(undefined)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <ErrorDialog
        isOpen={errorDialogOpen}
        onClose={() => setErrorDialogOpen(false)}
        title={errorTitle}
        description={errorMessage}
      />
    </motion.div>
  );
}
