import { useState } from 'react';
import { useAtom } from 'jotai';
import { customTraitsAtom } from '../../state/character';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Plus } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { EffectForm } from '../EffectForm';
import { Effect } from '../../models/effect';
import { Trait } from '../../models/traits';

export const AddTraitDialog = () => {
  const [customTraits, setCustomTraits] = useAtom(customTraitsAtom);
  const [open, setOpen] = useState(false);
  const [newTrait, setNewTrait] = useState<Trait>({
    name: '',
    description: '',
    effects: [],
  });

  const handleAddTrait = () => {
    if (!newTrait.name || !newTrait.description) {
      alert('Please fill in all required fields');
      return;
    }

    if (customTraits[newTrait.name]) {
      alert('A trait with this name already exists');
      return;
    }

    setCustomTraits((prev) => ({
      ...prev,
      [newTrait.name]: newTrait,
    }));

    setOpen(false);
    setNewTrait({
      name: '',
      description: '',
      effects: [],
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-4">
          <Plus className="h-4 w-4 mr-2" />
          Add Custom Trait
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md h-[600px] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Create Custom Trait</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-auto py-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <Input
                value={newTrait.name}
                onChange={(e) =>
                  setNewTrait({ ...newTrait, name: e.target.value })
                }
                placeholder="Enter trait name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={newTrait.description}
                onChange={(e) =>
                  setNewTrait({
                    ...newTrait,
                    description: e.target.value,
                  })
                }
                placeholder="Enter trait description"
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2">Effects</label>
              <EffectForm
                value={newTrait.effects || []}
                onChange={(effects) =>
                  setNewTrait({ ...newTrait, effects })
                }
              />
            </div>
            <Button onClick={handleAddTrait} className="w-full">
              Create Trait
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};