import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, H3, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Underroot refers to the peoples living in underground communities in the
    eastern lands of Downunda.
  </p>
);

const content = (
  <>
    <H2>Demographics</H2>
    <Body>
      <p>
        Joonyar form the majority of the Underroot populous. Other creatures are
        mostly descendants of refugees who fled the carnage of the Swarm and
        assimilated into the communities. Communities are led by a group of
        elders.
      </p>
    </Body>

    <H2>Language</H2>
    <Body>
      <p>
        Underroot people don't have a written or verbal language. Instead, they
        communicate through telepathy.
      </p>
    </Body>

    <H2>History</H2>
    <Body>
      <p>
        Historically Underroot communities were common and widespread across the
        eastern and southern forests of Downunda. However, many communities have
        been eradicated by the Swarm. Only a few communities have survived due
        to the fact that they are mostly underground or underwater, and have
        hidden from the wrath of Malvada's forces.
      </p>
    </Body>

    <H2>Legends</H2>

    <H3>Creation</H3>
    <Body>
      <p>
        In the beginning, the world was a barren wasteland. All that existed was
        Darani, the Ancestor Tree. With plenty of sunlight and water, Darani
        thrived and quickly spread its roots to cover all the lands. It enriched
        the soil with nutrients and breathed air into the sky. It then dropped
        the most glorious fruits. From the flesh of the fruits came the first
        animals, and the seeds sprouted into all kinds of exotic trees. A great
        forest was born.
      </p>
    </Body>

    <H2>Traditions and Beliefs</H2>

    <H3>The Ancestor Tree</H3>
    <Body>
      <p>
        Darani is perceived as the creator of all life. It is believed to be
        all-knowing due to its age, reach across the world and impeccable
        memory. The Underroot believe it is their duty to protect and worship
        the Ancestor Tree and the forests it created.
      </p>
      <p>
        It is a common practice to pray at one of the Ancestor Tree's enormous
        trunks in order to seek its wisdom and guidance. Sometimes, the Ancestor
        Tree will telepathically speak back one word in response to the prayer.
        In rare circumstances, Darani will share a vision with its subject.
        Those that receive a visions are believed to be gifted.
      </p>
    </Body>

    <H3>Meditation</H3>
    <Body>
      <p>
        The Underroot place a high emphasis on their psychic aptitude as it
        brings them closer to Darani and helps defend themselves from threats,
        particularly the Swarm. Commonly Underroot people will partake in
        meditation to further develop their psychic skills.
      </p>
    </Body>

    <H3>Birth and renewal</H3>
    <Body>
      <p>
        Burial sites are positioned at the roots of the Ancestor Tree. It is
        believed that decomposing bodies return their sustenance that they have
        obtained from the forest back to the Ancestor Tree to sustain the circle
        of life. The spirits of the dead can then join with Darani to become
        one.
      </p>
      <p>
        Likewise, it is tradition to conceive and give birth at sacred locations
        close to Darani so that the child's spirit is connected to Darani from
        birth.
      </p>
    </Body>

    <H3>Psychedelics</H3>
    <Body>
      <p>
        The Underroot cultivate psychedilc fungi that are endemic to their
        communities. They are consumed during sacred ceremonies to enhance their
        connection with Darani.
      </p>
    </Body>

    <H2>Architecture</H2>
    <Body>
      <p>
        Underroot towns are a labyrinth of underground tunnels and caves. The
        entrances to Underroot towns are typically concealed by vegetation,
        lakes or waterfalls to elude detection by the Swarm. Because of the lack
        of airflow, the towns contain various air channels to disperse carbon
        dioxide and heat.
      </p>
    </Body>

    <H2>Agriculture and Domestication</H2>
    <Body>
      <p>
        The Underroot have cultivated various species of algae that are
        harvested for food and textiles. Grubs are also bred as livestock and
        consumed as a delicacy.
      </p>
    </Body>
  </>
);

export const Underroot: WikiContent = {
  id: WikiId.Underroot,
  category: WikiCategory.Cultures,
  title: "Underroot",
  blurb:
    "The Underroot refers to the peoples living in underground communities in the eastern lands of Downunda.",
  summary,
  main: content,
};
