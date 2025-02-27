import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LandingPage } from "./components/LandingPage";
import { CharacterSheet } from "./components/CharacterSheet";
import { CharacterEditor } from "./components/CharacterEditor";
import { RulesPage } from "./components/RulesPage";
import { RulesButton } from "./components/RulesButton";
import background from "./images/campfire.webp";
import frame from "./images/leaf-frame.png";

function App() {
  const location = useLocation();
  const showRulesButton = location.pathname !== "/rules";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 z-30" />
        <img
          src={frame}
          className="absolute inset-0 z-20 frame-animation"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
        <img
          src={background}
          className="absolute inset-0 background-animation"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/character" element={<CharacterSheet />} />
          <Route path="/character/edit" element={<CharacterEditor />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </AnimatePresence>
      {showRulesButton && <RulesButton />}
    </div>
  );
}

export default App;
