import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    Trolls are a giant folk native to the swamps and mountains of Engloria. They
    are large humanoids with broad noses, heavy brows, mossy hair, and enormous
    hands and feet.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Moss and lichen often grow within their matted hair that covers their
        body. Their posture is typically hunched, contributing to their imposing
        appearance. Traditional clothing consists of rough, worn garments made
        from hides or scavenged fabrics.
      </p>
      <p>
        Troll dwellings are usually located in damp, secluded areas such as
        moss-covered caves or subterranean dens. They prefer regions that
        provide natural shelter and access to water sources. Some groups migrate
        seasonally, while others maintain permanent lairs in mountainous or
        forested regions.
      </p>
      <p>
        Trolls are known to be dangerous, choosing to actively hunt other folk.
        Their societies are loosely organised, with individuals or small family
        groups maintaining independent territories.
      </p>
    </Body>
  </>
);

export const Troll: WikiContent = {
  id: WikiId.Troll,
  category: WikiCategory.Folk,
  title: "Troll",
  blurb:
    "Trolls are a giant folk native to the swamps and mountains of Engloria.",
  summary,
  main: content,
};
