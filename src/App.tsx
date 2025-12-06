import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CharacterSheet } from "./pages/CharacterSheet";
import { CharacterEditor } from "./pages/CharacterEditor";
import { Handbook } from "./pages/Handbook";
import { CharactersPage } from "./pages/CharacterList";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Toaster } from "./components/ui/toaster";
import background from "./images/backgrounds/campfire.png";
import frame from "./images/backgrounds/leaf-frame.png";
import {
  CharacterSheetRoute,
  CharacterEditorRoute,
  HandbookRoute,
  CharacterListRoute,
  HomeRoute,
  WikiRoute,
  WikiCategoryRoute,
  WikiArticleRoute,
} from "./routes";
import "./App.sass";
import { Wiki } from "./pages/Wiki";
import { useImagePreloader } from "./hooks/useImagePreloader";
import { useSyncFocalCharacter } from "./state/saveFile";

function App() {
  const location = useLocation();
  const isLoading = useImagePreloader([background, frame]);

  useSyncFocalCharacter();

  // Get main section for animation key (only animate between main sections)
  const getMainSection = (pathname: string) => {
    if (pathname === HomeRoute) return "home";
    if (pathname.includes("/character")) return "character";
    if (pathname.includes("/handbook")) return "handbook";
    if (pathname.includes("/wiki")) return "wiki";
    return "home";
  };

  // Show loading state while images are preloading
  if (isLoading) {
    return (
      <div className="min-h-dvh bg-gradient-to-bl from-slate-900 to-slate-950" />
    );
  }

  return (
    <div className="min-h-dvh relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-bl from-slate-900 to-slate-950">
        <img
          src={frame}
          className="absolute inset-0 frame-animation"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
        <img
          src={background}
          className="absolute inset-0 -z-20 background-animation"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
      </div>

      <NavBar className="h-16" />

      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="firefly" />
      ))}

      <div className="h-dvh pt-16 overflow-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={getMainSection(location.pathname)}>
            <Route path={HomeRoute} element={<Home />} />
            <Route path={CharacterListRoute} element={<CharactersPage />} />
            <Route path={CharacterSheetRoute} element={<CharacterSheet />} />
            <Route path={CharacterEditorRoute} element={<CharacterEditor />} />
            <Route path={HandbookRoute} element={<Handbook />} />
            <Route path={WikiArticleRoute} element={<Wiki />} />
            <Route path={WikiCategoryRoute} element={<Wiki />} />
            <Route path={WikiRoute} element={<Wiki />} />
          </Routes>
        </AnimatePresence>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
