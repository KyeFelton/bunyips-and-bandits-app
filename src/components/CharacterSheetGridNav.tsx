import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Heart,
  ChartNoAxesColumn,
  Sparkles,
  Swords,
  Backpack,
} from "lucide-react";

interface CharacterSheetGridNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

interface NavSection {
  value: string;
  label: string;
  icon: React.ElementType;
}

const sections: NavSection[] = [
  { value: "character", label: "Character", icon: User },
  { value: "stats", label: "Stats", icon: Heart },
  { value: "skills", label: "Skills", icon: ChartNoAxesColumn },
  { value: "traits", label: "Traits", icon: Sparkles },
  { value: "actions", label: "Actions", icon: Swords },
  { value: "items", label: "Items", icon: Backpack },
];

export function CharacterSheetGridNav({
  activeSection,
  setActiveSection,
  isOpen,
  onClose,
}: CharacterSheetGridNavProps) {
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-40 bg-black/90 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-primary-foreground hover:text-accent-medium transition-colors"
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close navigation</span>
            </button>

            {/* Grid of navigation sections */}
            <div className="grid grid-cols-2 gap-4">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.value;

                return (
                  <button
                    key={section.value}
                    onClick={() => handleSectionClick(section.value)}
                    className={`
                      aspect-square rounded-lg border-2 flex flex-col items-center justify-center gap-3 transition-all
                      ${
                        isActive
                          ? "bg-accent-medium/20 border-accent-medium text-accent-medium"
                          : "bg-black/50 border-accent/30 text-primary-foreground hover:bg-accent/10 hover:border-accent-medium/50"
                      }
                    `}
                  >
                    <Icon className="h-12 w-12" />
                    <span className="text-lg font-medium">{section.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
