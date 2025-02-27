import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { BookOpen } from 'lucide-react';

export function RulesButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 bg-background shadow-lg hover:scale-110 transition-transform"
      onClick={() => navigate('/rules')}
    >
      <BookOpen className="h-6 w-6" />
    </Button>
  );
}