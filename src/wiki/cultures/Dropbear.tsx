import { Link } from "react-router-dom";
import { WikiArticle } from "../../models/wikiArticle";
import { WikiUri } from "../../enums/WikiUri";

export const Dropbear: WikiArticle = {
  title: "Dropbear",
  summary: <p></p>,
  infoBox: {
    traits: [
      {
        key: "Roots",
        value: <Link to={WikiUri.CultureDropbear}>Dropbear</Link>,
      },
    ],
  },
};
