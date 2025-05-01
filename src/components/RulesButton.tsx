import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { BookOpen } from "lucide-react";
import { HandbookRoute } from "../routes";

export function RulesButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full h-12 w-12 bg-background shadow-lg hover:scale-110 transition-transform"
      onClick={() => navigate(HandbookRoute)}
    >
      <BookOpen className="h-6 w-6" />
    </Button>
  );
}
