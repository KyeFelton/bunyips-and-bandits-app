import { Body, H3, WikiPage } from "../../components/WikiPage";

const main = (
  <>
    <H3>Languages</H3>
    <Body>
      <p>
        People across the world communicate through different languages that
        form part of their cultural identities and traditions. These languages
        are grouped into families to describe the similarity in sound,
        expression and origin.
      </p>
      <table className="md:mx-4">
        <thead>
          <tr>
            <th>Language Family</th>
            <th>Native Speakers</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Chitter</b>
            </td>
            <td>Avian</td>
            <td>
              A quick, rhythmic language of chirps and trills, reliant on
              precise pitch and timing.
            </td>
          </tr>
          <tr>
            <td>
              <b>Common Sign</b>
            </td>
            <td>-</td>
            <td>
              Conventional sign language using deliberate movements, hand
              shapes, and facial expressions that convey meaning without sound.
            </td>
          </tr>
          <tr>
            <td>
              <b>Common Tongue</b>
            </td>
            <td>Human, Goblin and Delver</td>
            <td>
              Conventional spoken tongues using familiar vocal patterns of tone,
              consonant, and vowel.
            </td>
          </tr>
          <tr>
            <td>
              <b>Grumble</b>
            </td>
            <td>Giant</td>
            <td>
              Deep, resonant vibrations that travel through air and ground
              alike.
            </td>
          </tr>
          <tr>
            <td>
              <b>Hissic</b>
            </td>
            <td>Reptilian</td>
            <td>
              A fluid language of drawn-out hisses, sharp flicks, and rasping
              undertones.
            </td>
          </tr>
          <tr>
            <td>
              <b>Scented</b>
            </td>
            <td>Floret</td>
            <td>
              A complex blend of fragrances and subtle colour shifts forming
              layered, sensory phrases.
            </td>
          </tr>
          <tr>
            <td>
              <b>Squawk</b>
            </td>
            <td>Avian</td>
            <td>
              A loud, erratic speech marked by squawks, mimicry, and rapid tonal
              shifts
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        Although languages are categorised into families, it is important to
        note that they do differ significantly across regions. For example, a
        Yowie of Downunda speaking their Grumble language would not understand
        the Grumble language spoken by Trolls of Engloria, and vice versa. Even
        individuals from nearby communities may have trouble communicating due
        to differences in dialects, accents and idioms. Local languages often
        include unique expressions and terminology specific to the local ecology
        and customs.
      </p>
      <p>
        In addition to one's native language, many learn the bridge language of
        their area. Bridge languages serve as the principal medium for trade,
        governance and diplomacy, enabling communication across community
        boundaries. Generally the Common Tongue is used as a verbal bridge
        language, and the Common Sign language for non-verbal communication.
        Bridge languages tend to be named after the area or people who speak
        traditionally it. The main bridge languages spoken in Downunda are
        Dharrigal and Englorian.
      </p>
    </Body>
  </>
);

export function Languages() {
  return <WikiPage title="Languages" main={main} />;
}
