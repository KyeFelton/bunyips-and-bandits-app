import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

type DescriptionDialogProps = {
  title: string;
  content: string;
  trigger?: React.ReactNode;
};

export const DescriptionDialog = ({ title, content, trigger }: DescriptionDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <button className="w-full mt-2 text-sm text-muted-foreground hover:text-foreground">
            Show more
          </button>
        )}
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