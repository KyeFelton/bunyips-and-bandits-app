import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="p-2">
      <header className="bg-slate-50">
      <FontAwesomeIcon icon={faEnvelope} />
      </header>
      <main className="grid grid-cols-4 gap-2">
      </main>
    </div>
  );
}

export default App;