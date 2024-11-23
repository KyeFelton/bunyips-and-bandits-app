import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  colour?: "green" | "blue" | "red";
  current: number;
  max: number;
  title: string;
};

export const StatBar = ({ colour, current, max, title }: Readonly<Props>) => {
  const percent = (current / max) * 100;
  return (
    <div className="py-2">
      <div className="flex justify-between">
        <span>{title}</span>
        <span>
          {current} / {max}
        </span>
      </div>
      <Progress value={percent} colour={colour ?? "primary"} />
      <div className="flex gap-2 mt-2">
        <Button variant="outline" size="mini">
          <FontAwesomeIcon icon={faMinus} size="sm" />
        </Button>
        <Input className="h-7 w-14" type="text" />
        <Button variant="outline" size="mini">
          <FontAwesomeIcon icon={faPlus} size="sm" />
        </Button>
      </div>
    </div>
  );
};
