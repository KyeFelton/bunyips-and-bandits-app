import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { NameCard } from "./NameCard";
import { DescriptionCard } from "./DescriptionCard";
import { StatsCard } from "./StatsCard";
import { SensesCard } from "./SensesCard";
import { ArmourCard } from "./ArmourCard";
import { SpeedCard } from "./SpeedCard";
import { CombatCard } from "./CombatCard";
import { ItemsTable } from "./ItemsTable";
import { SkillsTable } from "./SkillsTable";
import { TraitsList } from "./TraitsList";
import { ActionsList } from "./ActionsList";

export function CharacterSheet() {
  return (
    <motion.div
      className="min-w-[1024px] h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative flex justify-center h-full bg-foreground/50">
        <main className="py-12 px-8 grid grid-cols-4 gap-4 h-full w-full max-w-[1400px] overflow-auto">
          <div className="flex flex-col gap-2 h-[948px] justify-between">
            <NameCard />
            <DescriptionCard />
            <SensesCard />
          </div>
          <div className="col-span-2">
            <Tabs defaultValue="skills" className="flex flex-col items-start">
              <TabsList className="mb-2">
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="traits">Traits</TabsTrigger>
                <TabsTrigger value="actions">Actions</TabsTrigger>
                <TabsTrigger value="items">Items</TabsTrigger>
              </TabsList>
              <TabsContent
                value="traits"
                className="w-full flex-grow shadow-sm"
              >
                <Card className="h-[900px] p-4 overflow-auto">
                  <TraitsList />
                </Card>
              </TabsContent>
              <TabsContent
                value="actions"
                className="w-full flex-grow shadow-sm"
              >
                <Card className="h-[900px] p-4 overflow-auto">
                  <ActionsList />
                </Card>
              </TabsContent>
              <TabsContent value="items" className="w-full flex-grow shadow-sm">
                <Card className="h-[900px] p-4 overflow-auto">
                  <ItemsTable />
                </Card>
              </TabsContent>
              <TabsContent
                value="skills"
                className="w-full flex-grow shadow-sm"
              >
                <Card className="h-[900px] p-4 overflow-auto">
                  <SkillsTable />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex flex-col gap-4 h-[948px] justify-between">
            <StatsCard />
            <CombatCard />
            <SpeedCard />
            <ArmourCard />
          </div>
        </main>
      </div>
    </motion.div>
  );
}
