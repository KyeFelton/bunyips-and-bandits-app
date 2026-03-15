import { WikiContent } from "../../../../models/wikiContent";
import { WikiId } from "../../../../enums/WikiId";
import { WikiCategory } from "../../../../enums/WikiCategory";

const summary = (
  <p>
    Hunter vads, commonly referred to as hunters or hoppers, are a class of
    arthropodal creatures within the Swarm whose primary role is to scout and
    pursue prey. They are fast, agile, and capable of extraordinary leaps,
    allowing them to traverse difficult terrain in pursuit of targets. Hunter
    vads operate in small packs directed through the Swarm's psychic network,
    reporting their findings directly to their hive queen.
  </p>
);

const content = (
  <>
    <h2>Description</h2>

    <p>
      Hunter vads resemble large, chitinous canines with six limbs—four adapted
      for running and two for grasping or pouncing. Their exoskeleton is black
      with orange streams. Their elongated heads bear compound eyes and sharp
      mandibles capable of rending flesh. A row of sensory spines runs along
      their back, vibrating faintly when receiving psychic commands.
    </p>

    <h2>Behaviour</h2>

    <p>
      Hunter vads are pack-oriented, hunting in coordinated units under direct
      psychic guidance. They rely on speed and ambush tactics to capture prey.
      While individually intelligent, their will is fully bound to Malvada,
      acting only in service to her commands. When not hunting, they patrol hive
      perimeters and scout for new resources or threats.
    </p>
  </>
);

export const HunterVad: WikiContent = {
  id: WikiId.HunterVad,
  category: WikiCategory.Fauna,
  title: "Hunter Vad",
  blurb:
    "Hunter vads are a class of arthropodal creatures within the Swarm whose primary role is to scout and pursue prey.",
  summary,
  main: content,
};
