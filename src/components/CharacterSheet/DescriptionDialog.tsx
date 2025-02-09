import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

type DescriptionDialogProps = {
  title: string;
  content: string;
};

export const DescriptionDialog = ({ title, content }: DescriptionDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full mt-2 text-muted-foreground hover:text-foreground"
        >
          Show more
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto pr-2">
          <div className="text-sm leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};