import { useAtom, useAtomValue } from "jotai";
import { traitsAtom, customTraitsAtom } from "./../state/character";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus, Trash2, Edit2 } from "lucide-react";
import { EffectForm } from "./EffectForm";
import { Trait } from "./../models/traits";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";

export const TraitsList = () => {
  const traits = useAtomValue(traitsAtom);
  const [customTraits, setCustomTraits] = useAtom(customTraitsAtom);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingTrait, setEditingTrait] = useState<Trait | null>(null);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [traitToDelete, setTraitToDelete] = useState<number | null>(null);

  const handleAddTrait = () => {
    const newTrait: Trait = {
      name: "",
      description: "",
      effects: [],
    };
    setEditingTrait(newTrait);
    setEditingIndex(null);
    setDialogOpen(true);
  };

  const handleEditTrait = (index: number, trait: Trait) => {
    setEditingTrait({ ...trait });
    setEditingIndex(index);
    setDialogOpen(true);
  };

  const handleDeleteTrait = (index: number) => {
    setTraitToDelete(index);
  };

  const confirmDeleteTrait = () => {
    if (traitToDelete === null) return;

    setCustomTraits((prev) => {
      const newTraits = [...prev];
      newTraits.splice(traitToDelete, 1);
      return newTraits;
    });

    setTraitToDelete(null);
  };

  const handleSaveTrait = () => {
    if (!editingTrait) return;

    if (editingIndex !== null) {
      // Update existing trait
      setCustomTraits((prev) => {
        const newTraits = [...prev];
        newTraits[editingIndex] = editingTrait;
        return newTraits;
      });
    } else {
      // Add new trait
      setCustomTraits((prev) => [...prev, editingTrait]);
    }

    setDialogOpen(false);
    setEditingTrait(null);
    setEditingIndex(null);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingTrait(null);
    setEditingIndex(null);
  };

  const isCustomTrait = (index: number) => {
    // Custom traits are at the end of the traits array
    const customStartIndex = traits.length - customTraits.length;
    return index >= customStartIndex;
  };

  const getCustomTraitIndex = (traitIndex: number) => {
    const customStartIndex = traits.length - customTraits.length;
    return traitIndex - customStartIndex;
  };

  if (traits.length === 0) {
    return (
      <>
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex-1" />
            <Button variant="outline" onClick={handleAddTrait}>
              <Plus className="h-4 w-4 mr-2" />
              Add Custom Trait
            </Button>
          </div>
          <div className="text-center text-muted-foreground p-8">
            No traits unlocked. Level up your skills by rolling critical
            successes, or add custom traits above.
          </div>
        </div>
        <TraitDialog
          open={dialogOpen}
          trait={editingTrait}
          isEditing={editingIndex !== null}
          onSave={handleSaveTrait}
          onClose={handleCloseDialog}
          onChange={setEditingTrait}
        />
      </>
    );
  }

  return (
    <>
      <div className="space-y-4">
        <div className="divide-y divide-border">
          {traits.map((trait, index) => {
            const isCustom = isCustomTrait(index);
            const customIndex = isCustom ? getCustomTraitIndex(index) : -1;

            return (
              <div key={`${trait.name}-${index}`} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="font-semibold">{trait.name}</div>
                    <p className="text-sm">{trait.description}</p>
                  </div>
                  {isCustom && (
                    <div className="flex gap-1 ml-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEditTrait(customIndex, trait)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteTrait(customIndex)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center pt-2">
          <Button variant="outline" onClick={handleAddTrait}>
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
      <TraitDialog
        open={dialogOpen}
        trait={editingTrait}
        isEditing={editingIndex !== null}
        onSave={handleSaveTrait}
        onClose={handleCloseDialog}
        onChange={setEditingTrait}
      />
      <DeleteConfirmDialog
        open={traitToDelete !== null}
        traitName={
          traitToDelete !== null ? customTraits[traitToDelete]?.name : ""
        }
        onConfirm={confirmDeleteTrait}
        onCancel={() => setTraitToDelete(null)}
      />
    </>
  );
};

type TraitDialogProps = {
  open: boolean;
  trait: Trait | null;
  isEditing: boolean;
  onSave: () => void;
  onClose: () => void;
  onChange: (trait: Trait) => void;
};

const TraitDialog = ({
  open,
  trait,
  isEditing,
  onSave,
  onClose,
  onChange,
}: TraitDialogProps) => {
  if (!trait) return null;

  return (
    <Dialog open={open} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Edit Custom Trait" : "Add Custom Trait"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <Input
              value={trait.name}
              onChange={(e) =>
                onChange({
                  ...trait,
                  name: e.target.value,
                })
              }
              placeholder="Enter trait name"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Description</label>
            <Textarea
              value={trait.description}
              onChange={(e) =>
                onChange({
                  ...trait,
                  description: e.target.value,
                })
              }
              placeholder="Enter trait description"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">Effects</label>
            <EffectForm
              effects={trait.effects || []}
              onChange={(effects) => onChange({ ...trait, effects })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

type DeleteConfirmDialogProps = {
  open: boolean;
  traitName: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const DeleteConfirmDialog = ({
  open,
  traitName,
  onConfirm,
  onCancel,
}: DeleteConfirmDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={(open) => !open && onCancel()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Trait</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <strong>{traitName}</strong>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="destructive" onClick={onConfirm}>
            Delete
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
