import { useAtomValue } from 'jotai';
import { LandingPage } from './components/LandingPage';
import { CharacterSheet } from './components/CharacterSheet';
import { CharacterEditor } from './components/CharacterEditor';
import { isEditingCharacterAtom, isFirstLoadAtom } from './state/app';

function App() {
  const isFirstLoad = useAtomValue(isFirstLoadAtom);
  const isEditingCharacter = useAtomValue(isEditingCharacterAtom);

  if (isFirstLoad) {
    return <LandingPage />;
  }

  if (isEditingCharacter) {
    return <CharacterEditor />;
  }

  return <CharacterSheet />;
}

export default App;
