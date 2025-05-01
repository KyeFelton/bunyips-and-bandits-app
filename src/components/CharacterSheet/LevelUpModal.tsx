import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface LevelUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LevelUpModal = ({ open, onOpenChange }: LevelUpModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Level Up</DialogTitle>
        </DialogHeader>
        {/* Content will be added later */}
      </DialogContent>
    </Dialog>
  );
};
