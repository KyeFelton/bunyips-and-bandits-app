import { Link } from "react-router-dom";
import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";

export const Dropbear: WikiContent = {
  id: WikiId.Dropbear,
  category: WikiCategory.Folk,
  title: "Dropbear",
  summary: <p></p>,
  infoBox: {
    traits: [
      {
        key: "Clade",
        value: "Goblin",
      },
      {
        key: "Culture",
        value: <Link to={WikiId.Dropbear}>Dropbear</Link>,
      },
    ],
  },
};
