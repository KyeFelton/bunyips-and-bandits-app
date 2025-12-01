import { Link, useLocation } from "react-router-dom";
import {
  CharacterListRoute,
  HandbookRoute,
  HomeRoute,
} from "../routes";
import { Logo } from "./Logo";
import { cn } from "../utils/cn";
import { User, Book } from "lucide-react";
import { MobileMenu } from "./MobileMenu";
import { WikiDropdown } from "./WikiDropdown";

interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const location = useLocation();

  const isCharacterActive =
    location.pathname === CharacterListRoute ||
    location.pathname.includes("/character/") ||
    location.pathname.includes("/character?");
  const isHandbookActive = location.pathname.includes(HandbookRoute);

  return (
    <div
      className={cn(
        "fixed z-50 bg-black shadow-sm w-full top-0 left-0 right-0",
        className
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile: Burger menu + Logo */}
        <div className="flex items-center gap-3 md:hidden">
          <MobileMenu />
          <Link to={HomeRoute} className="flex items-center">
            <Logo className="h-8" />
          </Link>
        </div>

        {/* Desktop: Logo */}
        <Link to={HomeRoute} className="hidden md:flex items-center">
          <Logo className="h-10 mr-2" />
        </Link>

        {/* Desktop: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to={CharacterListRoute}
            className={cn(
              "text-primary-foreground hover:text-accent-medium transition-colors flex items-center",
              isCharacterActive ? "text-accent-medium" : ""
            )}
          >
            <User className="h-5 w-5 mr-2" />
            <span className="text-base">Character</span>
          </Link>
          <Link
            to={HandbookRoute}
            className={cn(
              "text-primary-foreground hover:text-accent-medium transition-colors flex items-center",
              isHandbookActive ? "text-accent-medium" : ""
            )}
          >
            <Book className="h-5 w-5 mr-2" />
            <span className="text-base">Handbook</span>
          </Link>
          <WikiDropdown />
        </nav>
      </div>
    </div>
  );
}
