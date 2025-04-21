import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LandingPage } from "./components/LandingPage";
import { CharacterSheet } from "./components/CharacterSheet";
import { CharacterEditor } from "./components/CharacterEditor";
import { Handbook } from "./components/Handbook";
import { RulesButton } from "./components/RulesButton";
import { Toaster } from "./components/ui/toaster";
import background from "./images/background.png";
import frame from "./images/leaf-frame.png";
import {
  CharacterSheetRoute,
  CharacterEditorRoute,
  HomeRoute,
  HandbookRoute,
} from "./routes";

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
          <Route path={HomeRoute} element={<LandingPage />} />
          <Route path={CharacterSheetRoute} element={<CharacterSheet />} />
          <Route path={CharacterEditorRoute} element={<CharacterEditor />} />
          <Route path={HandbookRoute} element={<Handbook />} />
        </Routes>
      </AnimatePresence>
      {showRulesButton && <RulesButton />}
      <Toaster />
    </div>
  );
}

export default App;
