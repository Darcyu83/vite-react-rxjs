import { GameValueType } from "..";
import { calculateWinner } from "../utils";
import Square from "./Square";

interface IProps {
  xIsNext: boolean;
  squares: GameValueType[];
  onPlay: (nextSqaures: GameValueType[]) => void;
}

const SQUARE_SIZE = 3;
function Board({ xIsNext, squares, onPlay }: IProps) {
  const handleClick = (sqaureIdx: number) => {
    if (calculateWinner(squares) || squares[sqaureIdx]) {
      return;
    }

    const nextSquares = squares.slice();

    nextSquares[sqaureIdx] = xIsNext ? "X" : "O";
    console.log("sqaureIdx==== ", sqaureIdx, nextSquares);

    onPlay(nextSquares);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 25px)",
        gridTemplateRows: "repeat(3, 25px)",
      }}
    >
      {[...Array(SQUARE_SIZE)].map((__, rowIdx) => {
        return (
          <div key={"row_" + rowIdx}>
            {[...Array(SQUARE_SIZE)].map((_, colIdx) => {
              const squareIdx = (SQUARE_SIZE - 1) * rowIdx + rowIdx + colIdx;
              return (
                <Square
                  key={"square_" + squareIdx}
                  value={squares[squareIdx] ?? null}
                  onSquareClick={() => handleClick(squareIdx)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
