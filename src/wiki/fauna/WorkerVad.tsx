import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Worker vads, often called drones, form the backbone of the Swarm's hive
    structure. They are responsible for foraging, nest construction, caring for
    larvae, and maintaining the hive's infrastructure. Worker vads are the most
    numerous and versatile members of the Swarm, performing all essential
    non-combat duties.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Worker vads stand approximately half a metre tall and possess six
        limbs—two legs, four arms—and a pair of translucent wings folded along
        their back. Their heads bear compound eyes, a pair of antennae, and a
        jaw lined with sharp teeth accompanied by tusk-like mandibles. Their
        exoskeletons are dull grey or brown, often coated with mud from hive
        maintenance.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Worker vads are industrious, cooperative, and entirely subservient to
        the hive mind. They maintain constant psychic communication with nearby
        vads, coordinating tasks in unison. When threatened, they can defend
        themselves with their mandibles but typically retreat to alert ravager
        vads.
      </p>
    </Body>
  </>
);

export const WorkerVad: WikiContent = {
  id: WikiId.WorkerVad,
  category: WikiCategory.Fauna,
  title: "Worker Vad",
  blurb:
    "Worker vads form the backbone of the Swarm's hive structure, performing all essential non-combat duties.",
  summary,
  main: content,
};
