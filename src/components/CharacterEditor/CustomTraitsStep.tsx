import { useAtom } from 'jotai';
import { customTraitsAtom } from '../../state/character';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Plus, X } from 'lucide-react';
import { EffectForm } from '../EffectForm';
import { Trait } from '../../models/traits';

export const CustomTraitsStep = () => {
  const [customTraits, setCustomTraits] = useAtom(customTraitsAtom);

  const handleAddTrait = () => {
    const newTrait: Trait = {
      name: '',
      description: '',
      effects: [],
    };

    setCustomTraits((prev) => ({
      ...prev,
      [`New Trait ${Object.keys(prev).length + 1}`]: newTrait,
    }));
  };

  const handleUpdateTrait = (oldName: string, updatedTrait: Trait) => {
    if (oldName !== updatedTrait.name && customTraits[updatedTrait.name]) {
      alert('A trait with this name already exists');
      return;
    }

    setCustomTraits((prev) => {
      const newTraits = { ...prev };
      delete newTraits[oldName];
      newTraits[updatedTrait.name || oldName] = updatedTrait;
      return newTraits;
    });
  };

  const handleRemoveTrait = (name: string) => {
    setCustomTraits((prev) => {
      const newTraits = { ...prev };
      delete newTraits[name];
      return newTraits;
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Create custom traits to further customize your character.
        </div>
        <Button variant="outline" onClick={handleAddTrait}>
          <Plus className="h-4 w-4 mr-2" />
          Add Custom Trait
        </Button>
      </div>

      <div className="space-y-6">
        {Object.entries(customTraits).map(([name, trait]) => (
          <div key={name} className="bg-muted p-4 rounded-lg space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-4 flex-1">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <Input
                    value={trait.name}
                    onChange={(e) =>
                      handleUpdateTrait(name, { ...trait, name: e.target.value })
                    }
                    placeholder="Enter trait name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea
                    value={trait.description}
                    onChange={(e) =>
                      handleUpdateTrait(name, {
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
                    value={trait.effects || []}
                    onChange={(effects) =>
                      handleUpdateTrait(name, { ...trait, effects })
                    }
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveTrait(name)}
                className="ml-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {Object.keys(customTraits).length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            No custom traits added yet. Click "Add Custom Trait" to create one.
          </div>
        )}
      </div>
    </div>
  );
};