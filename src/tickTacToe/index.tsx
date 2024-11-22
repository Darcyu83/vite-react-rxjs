import { useState } from "react";
import HistoryBtns from "./components/HistoryBtns";
import Board from "./components/Board";
import { calculateWinner } from "./utils";

interface IProps {}

export type GameValueType = "X" | "O" | null;
function TicTacToeGame(props: IProps) {
  const [history, setHistory] = useState<GameValueType[][]>([
    Array(9).fill(null),
  ]);

  const [currMove, setCurrMove] = useState(0);

  const xIsNext = currMove % 2 === 0;

  const currSqaures = history[currMove];

  const handlePlay = (nextSqaures: GameValueType[]) => {
    const nextHistory = [...history.slice(0, currMove + 1), nextSqaures];
    setHistory(nextHistory);
    setCurrMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrMove(nextMove);
  };

  const winner = calculateWinner(currSqaures);
  const gameStatus = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div>
      <h1>{currMove}</h1>
      <h1>{gameStatus}</h1>

      <Board xIsNext={xIsNext} squares={currSqaures} onPlay={handlePlay} />

      <HistoryBtns history={history} jumpTo={jumpTo} />
    </div>
  );
}

export default TicTacToeGame;
