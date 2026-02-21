import { Routes, Route } from "react-router-dom";
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
  const isLoading = useImagePreloader([background, frame]);

  useSyncFocalCharacter();

  // Show loading state while images are preloading
  if (isLoading) {
    return (
      <div className="min-h-dvh bg-surface" />
    );
  }

  return (
    <div className="min-h-dvh relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-surface">
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
        {/* Dimmed background overlay */}
        <div className="absolute inset-0 bg-foreground/20" />
        {/* Side vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.5) 100%)" }}
        />
      </div>

      <NavBar className="h-16" />

      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="firefly" />
      ))}

      <div className="h-dvh pt-16 overflow-auto">
        <div className="h-full">
        <Routes>
          <Route path={HomeRoute} element={<Home />} />
          <Route path={CharacterListRoute} element={<CharactersPage />} />
          <Route path={CharacterSheetRoute} element={<CharacterSheet />} />
          <Route path={CharacterEditorRoute} element={<CharacterEditor />} />
          <Route path={HandbookRoute} element={<Handbook />}>
            <Route path=":section" element={null} />
          </Route>
          <Route path={WikiArticleRoute} element={<Wiki />} />
          <Route path={WikiCategoryRoute} element={<Wiki />} />
          <Route path={WikiRoute} element={<Wiki />} />
        </Routes>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
