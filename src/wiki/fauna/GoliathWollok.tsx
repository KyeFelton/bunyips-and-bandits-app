import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { H2, Body } from "../../components/WikiPage";

const summary = (
  <p>
    The goliath wollok is a massive, quadrupedal marsupial native to Downunda.
    It is the largest known species of wollok, easily recognised by its great
    size and sturdy build. Despite its immense bulk, the goliath wollok is
    generally docile and serves as one of the dominant megafauna of the
    continent's plains and open forests.
  </p>
);

const content = (
  <>
    <H2>Description</H2>
    <Body>
      <p>
        Goliath wollok are heavy-bodied marsupials with broad chests, thick
        limbs, and short, stubby tails. Their heads are large and blunt with
        forward-facing nostrils and small rounded ears. Adults commonly stand
        around 5m tall at the shoulder, with the largest individuals exceeding
        this height. Their coats are coarse and pale brown or grey, often dusted
        with red or yellow tones depending on the local soil. The species' size
        alone provides significant protection from most predators.
      </p>
    </Body>

    <H2>Habit</H2>
    <Body>
      <p>
        These creatures inhabit open woodlands, grasslands, and scrublands
        throughout most of Downunda, though they avoid arid deserts and dense
        tropical regions. They prefer areas with access to freshwater and
        abundant low vegetation. Goliath wollok herds migrate seasonally to
        follow rainfall and new plant growth.
      </p>
    </Body>

    <H2>Diet</H2>
    <Body>
      <p>
        Goliath wollok are herbivorous grazers, feeding on leaves, grasses, and
        shrubs. Their strong jaws and broad, flat teeth are adapted to grind
        fibrous plant matter. They are capable of going long periods without
        water, obtaining most moisture from their diet.
      </p>
    </Body>

    <H2>Behaviour</H2>
    <Body>
      <p>
        Social and protective, goliath wollok live in herds ranging from a few
        individuals to several dozen. Each herd is led by an older female. They
        are generally placid but become aggressive if threatened, forming
        defensive circles around their young. Mating occurs during the wet
        season, with a single joey carried in the mother's pouch for many months
        before joining the herd. Their size deters most predators, though they
        may use their weight and powerful limbs to charge when provoked.
      </p>
    </Body>
  </>
);

export const GoliathWollok: WikiContent = {
  id: WikiId.GoliathWollok,
  category: WikiCategory.Fauna,
  title: "Goliath Wollok",
  blurb:
    "The goliath wollok is a massive, quadrupedal marsupial native to Downunda.",
  summary,
  main: content,
};
