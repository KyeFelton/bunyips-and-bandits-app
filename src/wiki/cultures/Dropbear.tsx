import { Link } from "react-router-dom";
import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";

export const Dropbear: WikiContent = {
  id: WikiId.Dropbear,
  category: WikiCategory.Cultures,
  title: "Dropbear",
  summary: <p></p>,
  infoBox: {
    traits: [
      {
        key: "Roots",
        value: <Link to={WikiId.Dharrigal}>Dharrigal</Link>,
      },
    ],
  },
};
