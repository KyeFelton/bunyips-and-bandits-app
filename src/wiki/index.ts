import { WikiContent } from "../models/wikiContent";
import Cultures from "./cultures";
import Folk from "./folk";

const articles: WikiContent[] = [...Cultures, ...Folk];

export default articles;
