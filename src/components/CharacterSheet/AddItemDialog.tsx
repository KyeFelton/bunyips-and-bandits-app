import { useState } from 'react';
import { useAtom } from 'jotai';
import { itemsAtom } from '../../state/character';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import { Plus } from 'lucide-react';
import * as Items from '../../models/items';

type Props = {
  maxWeight: number;
};

export const AddItemDialog = ({ maxWeight }: Props) => {
  const [items, setItems] = useAtom(itemsAtom);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const allItems = Object.values(Items).filter(
    (item) => typeof item === 'object' && 'name' in item
  ) as Items.Item[];

  const filteredItems = allItems.filter(
    (item) =>
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())) &&
      item.weight <= maxWeight
  );

  const handleAddItem = (item: Items.Item) => {
    if (!items.some((i) => i.name === item.name)) {
      setItems([...items, { ...item, equipped: false, quantity: 1 }]);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-4" disabled={maxWeight <= 0}>
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Add Item</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <Input
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="overflow-y-auto flex-1">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Weight</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredItems.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell className="text-right">{item.weight} kg</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddItem(item)}
                      disabled={items.some((i) => i.name === item.name)}
                    >
                      {items.some((i) => i.name === item.name)
                        ? 'Added'
                        : 'Add'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {filteredItems.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-muted-foreground"
                  >
                    {maxWeight <= 0
                      ? 'Cannot add more items - weight limit reached'
                      : 'No items found'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
