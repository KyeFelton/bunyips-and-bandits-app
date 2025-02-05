import { Card } from "./components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { CharacterNameCard } from "./components/CharacterNameCard";
import { CharacterImageCard } from "./components/CharacterImageCard";
import { CharacterStatsCard } from "./components/CharacterStatsCard";
import { SensesCard } from "./components/SensesCard";
import { ArmourCard } from "./components/ArmourCard";
import { SpeedCard } from "./components/SpeedCard";
import { ItemsTable } from "./components/ItemsTable";
import { SkillsTable } from "./components/SkillsTable";
import { PathsTable } from "./components/PathsTable";
import { TraitsList } from "./components/TraitsList";
import { ActionsList } from "./components/ActionsList";
import { CharacterDetailsCard } from "./components/CharacterDetailsCard";

function App() {
  return (
    <div className="min-w-[1000px] bg-muted flex justify-center">
      <main className="p-8 grid grid-cols-4 gap-4 h-full max-w-[1400px]">
        <div className="flex flex-col gap-4 h-full">
          <CharacterNameCard />
          <CharacterImageCard />
          <CharacterDetailsCard />
        </div>
        <div className="col-span-2 h-full overflow-auto">
          <Tabs
            defaultValue="skills"
            className="h-full flex flex-col items-start"
          >
            <TabsList>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="paths">Paths</TabsTrigger>
              <TabsTrigger value="traits">Traits</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
              <TabsTrigger value="items">Items</TabsTrigger>
            </TabsList>
            <TabsContent value="paths" className="w-full flex-grow shadow-sm">
              <Card className="h-full p-4 overflow-auto">
                <PathsTable />
              </Card>
            </TabsContent>
            <TabsContent value="traits" className="w-full flex-grow shadow-sm">
              <Card className="h-full p-4 overflow-auto">
                <TraitsList />
              </Card>
            </TabsContent>
            <TabsContent value="actions" className="w-full flex-grow shadow-sm">
              <Card className="h-full p-4 overflow-auto">
                <ActionsList />
              </Card>
            </TabsContent>
            <TabsContent value="items" className="w-full flex-grow shadow-sm">
              <Card className="h-full p-4 overflow-auto">
                <ItemsTable />
              </Card>
            </TabsContent>
            <TabsContent value="skills" className="w-full flex-grow shadow-sm">
              <Card className="h-full p-4 overflow-auto">
                <SkillsTable />
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex flex-col gap-4 p-1 h-full overflow-hidden">
          <CharacterStatsCard />
          <SpeedCard />
          <ArmourCard />
          <SensesCard />
        </div>
      </main>
    </div>
  );
}

export default App;
