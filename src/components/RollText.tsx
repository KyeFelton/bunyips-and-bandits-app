type Props = {
  dice: number;
  modifier: number;
};

export const RollText = ({ dice, modifier }: Props) => {
  return (
    <span>
      d{dice}
      {modifier > 0
        ? ` + ${modifier}`
        : modifier < 0
          ? ` - ${modifier * -1}`
          : ""}
    </span>
  );
};
