import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LandingPage } from "./components/LandingPage";
import { CharacterSheet } from "./components/CharacterSheet";
import { CharacterEditor } from "./components/CharacterEditor";
import { Handbook } from "./components/Handbook";
import { CharactersPage } from "./components/CharacterList";
import { NavBar } from "./components/NavBar";
import { Toaster } from "./components/ui/toaster";
import background from "./images/backgrounds/campfire.png";
import frame from "./images/backgrounds/leaf-frame.png";
import {
  CharacterSheetRoute,
  CharacterEditorRoute,
  HomeRoute,
  HandbookRoute,
  CharacterListRoute,
} from "./routes";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-dvh relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-slate-900 to-slate-950">
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

      <NavBar className={"h-14 md:h-16"} />

      <div className="h-dvh pb-14 md:pb-0 md:pt-16 overflow-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={HomeRoute} element={<LandingPage />} />
            <Route path={CharacterSheetRoute} element={<CharacterSheet />} />
            <Route path={CharacterEditorRoute} element={<CharacterEditor />} />
            <Route path={HandbookRoute} element={<Handbook />} />
            <Route path={CharacterListRoute} element={<CharactersPage />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
