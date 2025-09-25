import { Link } from "react-router-dom";
import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";

export const Dharrigal: WikiContent = {
  id: WikiId.Dharrigal,
  category: WikiCategory.Cultures,
  title: "Dharrigal",
  summary: <p></p>,
  infoBox: {
    traits: [
      {
        key: "Regions",
        value: <Link to={WikiId.Dropbear}>Downunda</Link>,
      },
      {
        key: "Subcultures",
        value: (
          <ul>
            <li>
              <Link to={WikiId.Dropbear}>Dropbear</Link>
            </li>
          </ul>
        ),
      },
    ],
  },
};
