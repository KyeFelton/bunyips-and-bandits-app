import {
  faDownload,
  faUpload,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./components/ui/button";
import logo from "./logo.png";
import { Card, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

function App() {
  return (
    <div className="h-screen w-full bg-muted">
      <header className="fixed top-8 right-8 w-[320px]">
        <Card className=" items-center gap-4 p-4">
          <div className="flex flex-row items-center gap-2">
            <img src={logo} alt="logo" width="48" height="auto" />
            <h2 className="text-xl font-semibold tracking-tight">
              Bunyips & Bandits
            </h2>
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
        </Card>
      </header>
      <main className="p-8 grid grid-cols-4 gap-4 h-full">
        <div className="flex flex-col gap-5 h-full p-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-center">Teddy</CardTitle>
            </CardHeader>
          </Card>
          <Card className="h-full p-4 overflow-auto">
            <div>Stats</div>
          </Card>
        </div>
        <div className="mt-24 col-span-3">
          <Tabs
            defaultValue="actions"
            className="h-full flex flex-col items-start"
          >
            <TabsList className="">
              <TabsTrigger value="actions" className="">
                Actions
              </TabsTrigger>
              <TabsTrigger value="items">Items</TabsTrigger>
            </TabsList>
            <TabsContent value="actions" className="w-full flex-grow">
              <Card className="h-full p-4 overflow-auto">Actions</Card>
            </TabsContent>
            <TabsContent value="items" className="w-full flex-grow">
              <Card className="h-full p-4 overflow-auto">Items</Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default App;
