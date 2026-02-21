import { Body, WikiPage } from "../../components/WikiPage";

const main = (
  <>
    <Body>
      <p>
        Many cultures across the world believe in one or more omnipotent gods
        who created the world and reside in the heavens. These deities are often
        credited with shaping the land, guiding mortal destiny, and maintaining
        cosmic balance. Despite the widespread nature of these beliefs, there is
        no definitive evidence that such gods exist. The true origin of the
        world remains unknown, and its creation is left open to interpretation.
      </p>
      <p>
        However, there are some primordial beings, or simply primordials, that
        have existed since the earliest ages of the world and are believed to
        predate all known civilizations. Each primordial is tied to a specific
        region or natural domain, such as the Rainbow Serpent of Downunda. They
        exhibit powers and abilities far beyond mortal understanding, performing
        acts of magic that appear to defy known principles.
      </p>
      <p>
        The primordials are often revered as deities by the local cultures that
        inhabit their regions. However, their nature and motives differ
        significantly from those of the supposed heavenly gods. They do not
        demand worship, issue commandments, or intervene in mortal affairs for
        moral reasons. Instead, they are generally neutral forces concerned with
        maintaining balance within their respective domains. Their actions are
        not guided by concepts of good or evil, but by the preservation of
        natural order.
      </p>
      <p>
        Direct encounters with primordials are rare. Most remain hidden or
        dormant for long periods, emerging only during major world-changing
        events or calamities. When they do act, their influence can alter
        landscapes, shift climates, or disrupt civilizations. While they possess
        great power, they are not omniscient or omnipresent. Their understanding
        of the world is vast but limited to their own domains and purposes.
      </p>
      <p>
        In the present age, the majority of people view both the heavenly gods
        and primordials equally as divine beings through the lens of faith. For
        the Game Master, the existence and origins of both the gods and the
        primordials are intentionally ambiguous. Each campaign may choose to
        treat them as literal deities, ancient beings, or forces of nature given
        form, depending on the themes the GM wishes to explore.
      </p>
    </Body>
  </>
);

export function Religion() {
  return <WikiPage title="Religion" main={main} />;
}
