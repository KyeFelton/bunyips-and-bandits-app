import {
  faDownload,
  faUpload,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./components/ui/button";
import logo from "./logo.png";

function App() {
  return (
    <div className="min-h-screen w-full bg-muted">
      <header className="fixed top-8 right-8 w-[320px] items-center gap-4 border-b bg-background rounded-lg p-4">
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="logo" width="64" height="auto" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Bunyips & Bandits
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <Button variant="ghost">
            <FontAwesomeIcon icon={faDownload} size="lg" title="Download" />
          </Button>
          <Button variant="ghost">
            <FontAwesomeIcon icon={faUpload} size="lg" title="Upload" />
          </Button>
          <Button variant="ghost">
            <FontAwesomeIcon icon={faRotateRight} size="lg" title="Reset" />
          </Button>
        </div>
      </header>
      <main></main>
    </div>
  );
}

export default App;
