import { GameValueType } from "..";

interface IProps {
  value: GameValueType;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: IProps) {
  return (
    <button
      style={{
        width: 25,
        aspectRatio: "1/1",
      }}
      className="square"
      onClick={onSquareClick}
    >
      {value ?? ""}
    </button>
  );
}

export default Square;
