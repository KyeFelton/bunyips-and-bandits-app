import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { HandbookRoute, CharacterListRoute } from "../routes";
import { Book, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "../components/Logo";
import "./Home.sass";

export function Home() {
  const navigate = useNavigate();

  const handleHowToPlay = () => {
    navigate(HandbookRoute);
  };

  const handleGetStarted = () => {
    navigate(CharacterListRoute);
  };

  return (
    <motion.div
      className="h-full container mx-auto py-8 px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
    >
      <div className="relative w-full max-w-xl min-w-[300px] flex flex-col items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="logo-animation absolute top-8 z-30 flex justify-center">
          <Logo className="w-[90%] h-16" />
        </div>
        <div className="banner-animation w-full flex flex-col justify-center items-center p-8 space-y-8 rounded-lg shadow-2xl backdrop-blur-sm border border-white/100 bg-black/95 z-20">
          <div className="invisible">
            <Logo className="w-full h-16" />
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-center gap-4 w-full">
            <div className="flex flex-col items-center gap-2">
              <Button
                variant="outline"
                className="get-started-button w-full md:w-md h-14 text-lg hover:scale-105 transition-transform"
                onClick={handleGetStarted}
              >
                <Play className="mr-2 h-6 w-6" />
                Get Started
              </Button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Button
                className="how-to-play-button w-full md:w-md h-14 text-lg hover:scale-105 transition-transform"
                onClick={handleHowToPlay}
              >
                <Book className="mr-2 h-6 w-6" />
                How to Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
