import { Card } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { NameCard } from './NameCard';
import { DescriptionCard } from './DescriptionCard';
import { StatsCard } from './StatsCard';
import { SensesCard } from './SensesCard';
import { ArmourCard } from './ArmourCard';
import { SpeedCard } from './SpeedCard';
import { CombatCard } from './CombatCard';
import { ItemsTable } from './ItemsTable';
import { SkillsTable } from './SkillsTable';
import { TraitsList } from './TraitsList';
import { ActionsList } from './ActionsList';

export function CharacterSheet() {
  return (
    <div className="min-w-[1000px] h-screen relative">
      {/* Background image with overlay */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/6/6b/Mount_Conner%2C_August_2003.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      </div> */}

      {/* Gradient background with multiple layers for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-accent-medium/40" />
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-background/50 to-transparent opacity-50" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-yellow-400 to-red-foreground" /> */}

      {/* Content */}
      <div className="relative flex justify-center h-full">
        <main className="p-8 grid grid-cols-4 gap-4 h-full w-full max-w-[1400px]">
          <div className="flex flex-col gap-4 max-h-screen overflow-auto">
            <NameCard />
            <DescriptionCard />
            <SensesCard />
          </div>
          <div className="col-span-2 max-h-screen overflow-auto">
            <Tabs defaultValue="skills" className="flex flex-col items-start">
              <TabsList>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="traits">Traits</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="items">Items</TabsTrigger>
              </TabsList>
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
          <div className="flex flex-col gap-4 p-1 max-h-screen overflow-auto">
            <StatsCard />
            <CombatCard />
            <SpeedCard />
            <ArmourCard />
          </div>
        </main>
      </div>
    </div>
  );
}