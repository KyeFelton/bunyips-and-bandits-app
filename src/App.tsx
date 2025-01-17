import {
  faDownload,
  faUpload,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./components/ui/button";
import logo from "./images/logo.png";
import characterImage from "./images/character.svg";
import { Card, CardHeader, CardTitle } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { StatBar } from "./components/StatBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { SenseIcon } from "./components/icons/Sense";

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
          <Card className="h-full p-4 overflow-auto flex flex-col gap-4">
            <div className="m-5">
              <img src={characterImage} alt="character" />
            </div>
            {/* <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Species" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="minotaur">Minotaur</SelectItem>
                <SelectItem value="yowie">Yowie</SelectItem>
                <SelectItem value="tengaroo">Tengaroo</SelectItem>
              </SelectContent>
            </Select> */}
            <Button variant="outline">
              <span className="text-lg">Minotaur</span>
            </Button>
            <StatBar colour="red" max={20} current={12} title="Health" />
            <StatBar colour="green" max={10} current={9} title="Sanity" />
            <StatBar colour="blue" max={20} current={8} title="Stamina" />
            <div>
              <div>Senses</div>
              <div>
                <SenseIcon
                  sense={{
                    type: "sight",
                    rating: 2,
                    standard: true,
                    infrared: true,
                  }}
                />
              </div>
            </div>
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
