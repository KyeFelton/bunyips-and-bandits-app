import { Link } from "react-router-dom";
import { WikiArticle } from "../../models/wikiArticle";
import { WikiUri } from "../../enums/WikiUri";

export const Dharrigal: WikiArticle = {
  title: "Dharrigal",
  summary: <p></p>,
  infoBox: {
    traits: [
      {
        key: "Regions",
        value: <Link to={WikiUri.CultureDropbear}>Downunda</Link>,
      },
      {
        key: "Subcultures",
        value: (
          <ul>
            <li>
              <Link to={WikiUri.CultureDropbear}>Dropbear</Link>
            </li>
          </ul>
        ),
      },
    ],
  },
};
