import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Tolrusians are the native peoples of the northern expanse of Tolrus, a
    region characterised by its vast tundra, dense forests, and harsh winters.
    Tolrusian culture reflects the adaptation of its people to a cold and often
    unforgiving environment, placing emphasis on resilience, cooperation, and
    reverence for nature's power.
  </p>
);

const content = (
  <>
    <H2>Demographics</H2>
    <Body>
      <p>
        Tolrusian society is predominantly human, with few other species able to
        withstand the extreme climate of the northern reaches. Populations are
        concentrated in fortified towns, trade outposts, and rural homesteads
        scattered across the tundra and taiga. Smaller settlements are typically
        self-sufficient, relying on shared labour and seasonal trade.
      </p>
      <p>
        Social structure is based around extended families and community
        councils, which manage local resources, mediate disputes, and organise
        collective work such as harvests or hunts. Elders are held in high
        esteem for their experience and ability to interpret omens and seasonal
        cycles.
      </p>
    </Body>

    <H2>History</H2>
    <Body>
      <p>
        Tolrusian history is shaped by cycles of unification and fragmentation.
        Periods of central authority are often followed by local independence,
        driven by the challenges of maintaining communication and governance
        across vast and remote territories. Historically, Tolrusians engaged in
        fur trading, mining, and animal husbandry, which remain major economic
        activities.
      </p>
      <p>
        Contact with southern empires has been sporadic due to geographic
        isolation, but occasional trade expeditions have brought foreign tools,
        fabrics, and grains into Tolrusian markets. In return, Tolrusians export
        furs, ivory, and precious stones from the northern mines.
      </p>
    </Body>

    <H2>Traditions and Beliefs</H2>
    <Body>
      <p>
        Tolrusian spirituality centres on animism and reverence for ancestral
        spirits. Natural forces such as wind, frost, and fire are believed to
        possess consciousness and will. Rituals are held during seasonal changes
        to honour these forces and seek protection for the coming months.
      </p>
    </Body>

    <H2>Clothing</H2>
    <Body>
      <p>
        Tolrusian clothing is designed for insulation and durability in freezing
        temperatures. Layers of fur, leather, and wool are worn throughout most
        of the year. Coats, hoods, and mittens made from the hides of woolly
        rhinos and tundra elk are common. Decorative embroidery and dyed thread
        are used along hems and collars to indicate family lineage or regional
        identity.
      </p>
      <p>
        Footwear consists of thick boots lined with fur or moss for warmth.
        Metal clasps and leather bindings are used to secure clothing, as
        buttons and ties are impractical in cold conditions.
      </p>
    </Body>

    <H2>Architecture</H2>
    <Body>
      <p>
        Tolrusian architecture prioritises insulation, stability, and resource
        efficiency. Buildings are constructed from timber, stone, and compacted
        snow, with thick walls and steeply pitched roofs designed to shed snow
        and retain heat.
      </p>
      <p>
        Traditional dwellings are semi-subterranean structures partially built
        into hillsides to conserve warmth. Larger towns feature log houses with
        central hearths and communal bathhouses used for hygiene and social
        gatherings.
      </p>
      <p>
        Public halls and fortresses are often decorated with carved wooden
        motifs depicting local myths and protective spirits. Despite the
        utilitarian design, Tolrusian architecture conveys a strong sense of
        endurance and harmony with the natural environment.
      </p>
    </Body>

    <H2>Agriculture and Domestication</H2>
    <Body>
      <p>
        Tolrusian agriculture is limited by the short growing season. Hardy root
        vegetables, such as turnips, onions, and radishes, are cultivated in
        insulated garden plots. Greenhouses constructed from wood and oiled
        hides extend the growing period in some communities.
      </p>
      <p>
        Animal husbandry is central to Tolrusian sustenance and transport.
        Woolly rhinos are bred for multiple purposes, including riding, hauling,
        and providing meat, milk, and hides. Their thick fur and strength make
        them indispensable to rural households. Some communities also keep elk
        and goats for meat and diary.
      </p>
      <p>
        Lynxes are domesticated as companions and guardians. They serve as
        effective sentinels, alerting their owners to predators or intruders.
        While they remain semi-independent, Tolrusian lynxes are valued for
        their loyalty and agility. Trained ravens are also kept for
        communication and reconnaissance between settlements.
      </p>
    </Body>
  </>
);

export const Tolrusian: WikiContent = {
  id: WikiId.Tolrusian,
  category: WikiCategory.Cultures,
  title: "Tolrusian",
  blurb:
    "The Tolrusians are the native peoples of the northern expanse of Tolrus, a region characterised by its vast tundra, dense forests, and harsh winters.",
  summary,
  main: content,
};
