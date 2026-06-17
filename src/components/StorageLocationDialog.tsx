import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  itemName: string;
  initialValue?: string;
  onConfirm: (storageLocation: string) => void;
};

export const StorageLocationDialog = ({
  open,
  onOpenChange,
  itemName,
  initialValue = "",
  onConfirm,
}: Props) => {
  const [storageLocation, setStorageLocation] = useState(initialValue);

  useEffect(() => {
    if (open) setStorageLocation(initialValue);
  }, [open, initialValue]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Store item</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <p className="text-sm text-muted-foreground">{itemName}</p>
          <div className="space-y-2">
            <label className="text-sm font-medium">Where is it stored?</label>
            <Input
              value={storageLocation}
              onChange={(event) => setStorageLocation(event.target.value)}
              placeholder="e.g. Home, wagon, bank"
              autoFocus
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onConfirm(storageLocation.trim());
              onOpenChange(false);
            }}
          >
            Store
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
