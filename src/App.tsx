import { useAtomValue } from "jotai";
import { LandingPage } from "./components/LandingPage";
import { CharacterSheet } from "./components/CharacterSheet";
import { CharacterEditor } from "./components/CharacterEditor";
import { isEditingCharacterAtom, isFirstLoadAtom } from "./state/app";
import background from "./images/cave.jpg";
import frame from "./images/leaf-frame.png";

function App() {
  const isFirstLoad = useAtomValue(isFirstLoadAtom);
  const isEditingCharacter = useAtomValue(isEditingCharacterAtom);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0  z-30" />
        <img
          src={frame}
          className="absolute inset-0 z-20 frame-animation"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 backdrop-blur-sm z-10" />
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
      {isFirstLoad ? (
        <LandingPage />
      ) : isEditingCharacter ? (
        <CharacterEditor />
      ) : (
        <CharacterSheet />
      )}
    </div>
  );
}

export default App;
