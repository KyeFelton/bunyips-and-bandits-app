import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export function RulesPage() {
  const navigate = useNavigate();
  const [rules, setRules] = useState('');

  useEffect(() => {
    fetch('/src/rules.md')
      .then((response) => response.text())
      .then((text) => setRules(text))
      .catch((error) => console.error('Error loading rules:', error));
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-background p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-4xl mx-auto relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0"
          onClick={() => navigate(-1)}
        >
          <X className="h-6 w-6" />
        </Button>
        
        <div className="prose prose-sm prose-invert max-w-none">
          <ReactMarkdown>{rules}</ReactMarkdown>
        </div>
      </div>
    </motion.div>
  );
}