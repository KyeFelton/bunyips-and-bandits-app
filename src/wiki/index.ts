import { WikiContent } from "../models/wikiContent";
import Continents from "./continents";
import Cultures from "./cultures";
import Fauna from "./fauna";
import Folk from "./folk";

const articles: WikiContent[] = [...Continents, ...Cultures, ...Fauna, ...Folk];

export default articles;
