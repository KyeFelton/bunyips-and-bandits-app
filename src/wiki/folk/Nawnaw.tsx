import { WikiContent } from "../../models/wikiContent";
import { WikiId } from "../../enums/WikiId";
import { WikiCategory } from "../../enums/WikiCategory";
import { Body } from "../../components/WikiPage";

const summary = (
  <p>
    The Nawnaw are a merfolk species found in the freshwater and coastal regions
    of Downunda. They possess elongated, eel-like bodies adapted for swift
    movement through water, with smooth scales and narrow fins along the spine
    and tail.
  </p>
);

const content = (
  <>
    <Body>
      <p>
        Their clothing is minimal, typically woven or crafted from seaweed and
        shells to allow unimpeded swimming.
      </p>
      <p>
        Nawnaw settlements consist of underwater towns and cities built from
        stone, mud, and crystal. These structures are reinforced with coral and
        lined with aquatic plants that provide both stability and illumination.
        Communities are often located near reefs or submerged cliffs, where
        natural defences protect them from predators and strong currents.
      </p>
      <p>
        Two distinct races of Nawnaw are recognised: freshwater and marine.
        Freshwater Nawnaw are generally smaller in size and darker in
        colouration, adapted to rivers, lakes, and inland waterways. Marine
        Nawnaw, by contrast, are larger and lighter in tone, suited to open
        ocean conditions. While either race can survive in the other's
        environment, the process requires gradual acclimatisation over the
        course of about a week, allowing their physiology to adjust to changes
        in salinity and pressure.
      </p>
      <p>
        Nawnaw are often regarded as disciplined and authoritative, serving as
        guardians of waterways and reefs. Their culture places emphasis on
        order, duty, and the preservation of aquatic environments, with
        leadership roles commonly held by those demonstrating exceptional
        strength or wisdom.
      </p>
    </Body>
  </>
);

export const Nawnaw: WikiContent = {
  id: WikiId.Nawnaw,
  category: WikiCategory.Folk,
  title: "Nawnaw",
  blurb:
    "The Nawnaw are a merfolk species found in the freshwater and coastal regions of Downunda.",
  summary,
  main: content,
};
