import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

// type Sense = {
//   type: string;
//   rating: "incapable" | "poor" | "moderate" | "acute";
// };

type Rating = 0 | 1 | 2 | 3;

type Sight = {
  type: "sight";
  rating: Rating;
  standard: boolean;
  infrared: boolean;
};

type Hearing = {
  type: "hearing";
  rating: Rating;
  standard: boolean;
  tremour: boolean;
};

type Smell = {
  type: "smell";
  rating: Rating;
};

type Sense = Sight | Hearing | Smell;

type Props = {
  sense: Sense;
};

type IconLayoutProps = {
  mainIcon: ReactNode;
  topIcon?: ReactNode;
  bottomIcon?: ReactNode;
  rating: Rating;
};

const IconLayout = ({
  mainIcon,
  topIcon,
  bottomIcon,
  rating,
}: IconLayoutProps) => {
  if (rating === 0) {
    return null;
  }

  return (
    <div className="">
      <div>{mainIcon}</div>
      <div>{topIcon}</div>
      <div>{bottomIcon}</div>
      <div>{Array.from({ length: rating }).map((_) => "I")}</div>
    </div>
  );
};

export const SenseIcon = ({ sense }: Props) => {
  if (sense.type === "sight") {
    return (
      <span>
        <IconLayout
          mainIcon={<FontAwesomeIcon icon={faEye} />}
          rating={sense.rating}
        />
      </span>
    );
  }
  return null;
};
