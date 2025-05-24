import { Link, useLocation } from "react-router-dom";
import { CharacterSheetRoute, HandbookRoute, HomeRoute } from "../routes";
import { Logo } from "./Logo";
import { cn } from "../utils/cn";
import { User, Book, Home } from "lucide-react";

interface MenuBarProps {
  className?: string;
}

export function MenuBar({ className }: MenuBarProps) {
  const location = useLocation();

  return (
    <div
      className={cn(
        //bg-gradient-to-r from-slate-950 to-black
        "fixed z-50 bg-black/50 shadow-sm w-full bottom-0 left-0 right-0 md:top-0 md:bottom-auto",
        className
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to={HomeRoute} className="hidden md:flex items-center">
          <Logo className="h-8 md:h-10 mr-2" />
        </Link>
        <nav className="flex items-center justify-around md:justify-end w-full md:w-auto md:space-x-6">
          <Link
            to={CharacterSheetRoute}
            className={cn(
              "text-primary-foreground hover:text-accent-medium transition-colors flex flex-col md:flex-row items-center",
              location.pathname.includes(CharacterSheetRoute)
                ? "text-accent-medium"
                : ""
            )}
          >
            <User className="h-5 w-5 md:mr-2" />
            <span className="text-xs mt-1 md:mt-0 md:text-base hidden md:inline">
              Character
            </span>
          </Link>
          <Link
            to={HomeRoute}
            className={cn(
              "md:hidden text-primary-foreground hover:text-accent-medium transition-colors flex flex-col items-center",
              location.pathname === HomeRoute ? "text-accent-medium" : ""
            )}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1 hidden">Home</span>
          </Link>
          <Link
            to={HandbookRoute}
            className={cn(
              "text-primary-foreground hover:text-accent-medium transition-colors flex flex-col md:flex-row items-center",
              location.pathname.includes(HandbookRoute)
                ? "text-accent-medium"
                : ""
            )}
          >
            <Book className="h-5 w-5 md:mr-2" />
            <span className="text-xs mt-1 md:mt-0 md:text-base hidden md:inline">
              Handbook
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
