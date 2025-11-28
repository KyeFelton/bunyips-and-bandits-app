import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, H3, Body } from "../../components/WikiPage";

const summary = (
  <p>
    Englorian is a term used to denote people with ancestral ties to Engloria.
    Englorian culture is the collection of many cultures of the various
    creatures and societies that inhabit the lands of Engloria.
  </p>
);

const content = (
  <>
    <H2>Demographics</H2>
    <Body>
      <p>
        Englorian society is a patchwork of human, hob, gnome and skerrig
        settlements. Humans form the majority, often holding positions of power
        in urban centers and agricultural regions, while hobs, gnomes, and
        skerrigs contribute to the economy through labor, craftsmanship, and
        maritime trade. Hobs tend to work alongside humans performing more
        domestic and agricultural duties. Gnomes, reclusive and industrious,
        dominate subterranean mining and alchemical workshops. Skerrigs dominate
        coastal trade and navigation.
      </p>
    </Body>

    <H2>Language</H2>
    <Body>
      <p>
        Englorian is the native language of most Englorians and formed the
        lingua franca of the Englorian Empire. In Downunda, Englorian has
        evolved to include terms of Dharrigal languages, and developed a unique
        nasal, high tone accent.
      </p>
    </Body>

    <H2>History</H2>
    <Body>
      <p>
        Englorian people and culture originated in the distant state of
        Engloria. At its peak, the state was a highly sophisticated empire, with
        many major cities and countless towns.
      </p>
    </Body>

    <H3>Druid Wars</H3>
    <Body>
      <p>
        The Rosette once thrived in harmony with the land, acting as stewards to
        maintain natural order and preservation of forests. Their philosophy and
        way of life however clashed violently with the empire's expansionist
        policies, which prioritized resource extraction over sustainability. When
        Englorian settlers began felling ancient groves for timber and farmland,
        the Rosette resisted through guerrilla tactics. The Empire retaliated
        with deforestation campaigns, sparking a decades-long war of attrition
        with the Rosette. To this day, many Rosette continue to spark unrest in
        the Empire in retribution.
      </p>
    </Body>

    <H3>Downunda Colonisation</H3>
    <Body>
      <p>
        Englorians first heard of Downunda from distant travellers. A colony of
        Englorians later arrived in Downunda through the Northwest corner of
        Dharrigal to establish a new outpost for their expanding empire. The
        first arrivals were mostly convicts who were ordered to construct the
        roads and buildings of the new towns.
      </p>
      <p>
        The Englorians soon came into conflict with the Dharrigal people as they
        encroached onto their land. The conflict started out as diplomatic
        disputes initially, but eventually turned to war. More often than not,
        battles ended in a Englorian victory as they were well prepared and
        equipped for military battle. After many years of struggle, the
        Englorian Empire conquered most of Downunda, and declared it as a state
        of the Empire. Some Dharrigal people were integrated into their society,
        whilst many were displaced from their homes and searched refuge in more
        remote parts of Downunda.
      </p>
      <p>
        The Englorian expansion ended with the Great Storm. Many towns and farms
        were flooded, survivors were separated from their families and
        communities, and the government crumbled under the logistical and
        economical nightmares that arose from the event. In the chaos, a coup in
        the capital of Engloria resulted in a change of government, and the
        Downunda colony was ultimately forfeited.
      </p>
      <p>
        Since the Great Storm, the Downunda Englorians have been physically and
        socially distanced from mainland Englorians. Some Englorians travelled
        back to their homeland by boat, but many have stayed in Downunda and
        maintained the towns built without jurisdiction of the former empire.
      </p>
    </Body>

    <H2>Legends</H2>

    <H3>Creation</H3>
    <Body>
      <p>
        It is believed that a grand kingdom of gods exists above the skies. The
        gods are thought to be too occupied with their own affairs in the
        heavens to pay much attention to the events happening below. However,
        one day the god Garth fell from the heavens into the sea below. He died
        and his body slowly decayed to form all the lands of the world. His
        bones became the rocks, his flesh the soil, his blood the rivers, his
        hairs the plants and his fleas the animals that inhabit the world. His
        lover, Eva, was heartbroken by his death and created the sun as a symbol
        of her eternal love for him. From that day forth, Eva has had a watchful
        eye over the events happening below, occasionally guiding the people of
        the world in the form of a white stag.
      </p>
    </Body>

    <H3>The Endless Night</H3>
    <Body>
      <p>
        Legend has it that there once was a giant, monstrous dragon called the
        Night Dragon that boasted to be the greatest and most powerful creature
        in all the lands. To prove his might, he flew high into the sky and ate
        the sun, casting the world into an endless night. First the plants died
        in the darkness, then famine soon followed. The people of Engloria
        pleaded and begged the dragon to give back the sun, but he refused their
        pleas. Others tried to steal back the sun forcefully, but their attempts
        failed. The dragon found the chaos to be amusing.
      </p>
      <p>
        During this time, Engloria was divided into three kingdoms of humans and
        hobs, gnomes, and skerrigs. Each kingdom individually tried and failed
        to make the dragon relinquish the sun. Realising that they are
        outmatched, they decided to unite their forces and strategise a new
        plan. In the new plan, a champion from each kingdom would rally together
        and fight the beast. Tytos the gnome, Cassreina the skerrig, and Rollo
        the human were selected as champions.
      </p>
      <p>
        The goddess Eva was also angered by the dragon stealing the sun. The sun
        was created to commemorate Garth, so to steal it was an offence to his
        legacy. She appeared in front of the three champions as the white stag
        and led them to a hidden grotto. There she revealed three weapons
        bestowed with incredible power to vanquish the Night Dragon. Tytos was
        given the Water Hammer, Rollo the Lightning Sword, and Cassreina the
        Wind Spear. With the weapons wielded, the trio fought and defeated the
        dragon, freeing the sun and ending the endless night once and for all.
      </p>
      <p>
        Although the dragon had been defeated, the kingdoms of Engloria
        maintained their alliance and eventually united into a single state.
      </p>
    </Body>

    <H3>The Great Storm</H3>
    <Body>
      <p>
        Most Englorians believe that the storm was created by the gods, but they
        have different theories as to why the gods unleashed such devastation to
        the Empire. Most say that another terrible beast tried to swallow the
        sun again, and the storm was the result of the cataclysmic battle that
        ensued. Some others however believe that the gods were angered by the
        war atrocities committed during the invasion of Downunda and delivered
        the storm as punishment.
      </p>
    </Body>

    <H2>Traditions and Beliefs</H2>

    <H3>The Mother Eva</H3>
    <Body>
      <p>
        Eva is perceived as a mother figure for all Englorians. She is believed
        to watch over the world and to guide and nurture the good and righteous.
        In a similar vain, she is often personified as a beacon or guiding
        light. She is also commonly symbolised as a white stag.
      </p>
    </Body>

    <H3>The New Champions</H3>
    <Body>
      <p>
        Many Englorians hold the belief that history moves in cycles and that,
        in times of great peril, new heroes will arise to defend the world—just
        as Rollo, Cassreina, and Tytos once did.
      </p>
    </Body>

    <H3>Churches</H3>
    <Body>
      <p>
        Every morning Englorians are expected to congregate at a church. Sermons
        often pay reverence for the gods Garth and Eva and recount the deeds of
        the Three Champions as lessons in courage, fairness, and perseverance.
        They also emphasise moral duty, honest labour, and social order.
      </p>
    </Body>

    <H3>Funerals</H3>
    <Body>
      <p>
        The deceased is typically washed, dressed in plain garments, and laid
        with a token tool or symbol of their life's work—a hammer for a
        carpenter, a spade for a farmer, or rope for a sailor. Burial takes
        place within three days, often on the outskirts of town or in small
        consecrated plots beside churches. During the burial, mourners toss a
        handful of soil onto the coffin and recite a short phrase: "To the earth
        that bore you, and the god that made you." After the ceremony, families
        share a modest meal where stories of the deceased's good deeds are told
        to honour their legacy. A short bow or touch to the chest followed by,
        "By the light of Eva," often used in ceremonies or meetings of respect.
      </p>
    </Body>

    <H2>Clothing</H2>
    <Body>
      <p>
        Englorian clothing reflects both climate and class distinction. Everyday
        garments are practical and made from locally produced wool, flax, and
        leather. Common dress for men includes trousers, shirts, and waistcoats,
        while women typically wear long skirts and blouses, often paired with
        aprons. Outerwear such as cloaks and coats are worn during colder
        months.
      </p>
      <p>
        Among the upper classes, clothing serves as a display of wealth and
        social standing. Finer materials, including imported silks and dyed
        linens, are used to create elaborate garments adorned with embroidery,
        lace, or metallic thread. Jewellery made of silver, gold, or gemstone is
        worn to indicate rank and prosperity.
      </p>
    </Body>

    <H2>Architecture</H2>
    <Body>
      <p>
        Englorian architecture in Downunda combines practicality with the
        stylistic influences of the mainland Empire. Early structures were built
        using local materials such as sandstone, clay, and timber, often
        reflecting the adaptation of traditional Englorian designs to the
        harsher Downundan environment.
      </p>
      <p>
        Typical buildings feature rectangular floor plans, high-pitched roofs,
        and wide verandas designed to provide shade and ventilation. Corrugated
        metal or wooden shingles are commonly used for roofing, while walls may
        be made of brick, stone, or plastered wattle-and-daub. Windows are tall
        and narrow, fitted with shutters to manage heat and light.
      </p>
      <p>
        Public buildings—such as courthouses, churches, and town halls—display
        more formal designs, incorporating arches, columns, and symmetrical
        facades inspired by classical architecture. Residential structures range
        from modest cottages to sprawling homesteads, often surrounded by
        gardens and fenced paddocks.
      </p>
    </Body>

    <H2>Agriculture and Domestication</H2>
    <Body>
      <p>
        Agriculture forms the foundation of Englorian rural life and is a major
        component of the colonial economy in Downunda. Farmland is divided into
        estates and tenant plots, with wealthier families owning large holdings
        that employ hired labourers or indentured workers.
      </p>
      <p>
        Grain production is central to Englorian agriculture. Barley and wheat
        are the primary cereal crops, used to produce bread, porridge, and ale.
        Oats, rye, and various root vegetables—such as carrots, parsnips,
        turnips, and radishes—are also cultivated. In temperate regions,
        orchards yield apples, pears, and plums, while hedgerows and woodlands
        supply wild berries and herbs.
      </p>
      <p>
        Animal husbandry complements crop farming. Deer, cattle and boars are
        raised for meat, hides, and milk, while grouse are domesticated for
        their eggs. Horses are bred for transport, farming, and military
        purposes, with larger breeds used for draught work. Foxes are
        domesticated as working animals, aiding in pest control and perimeter
        guarding.
      </p>
      <p>
        Glow snails are a distinctive to Englorian gnome cities. These creatures
        are selectively bred for their bioluminescence and housed in glass
        containers to provide natural lighting. Their shells are occasionally
        used as decorative ornaments or sold as curiosities.
      </p>
    </Body>
  </>
);

export const Englorian: WikiContent = {
  id: WikiId.Englorian,
  category: WikiCategory.Cultures,
  title: "Englorian",
  blurb:
    "Englorian is a term used to denote people with ancestral ties to Engloria.",
  summary,
  main: content,
};
