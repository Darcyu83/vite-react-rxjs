import { GameValueType } from "..";

interface IProps {
  history: GameValueType[][];
  jumpTo: (move: number) => void;
}

function HistoryBtns({ history, jumpTo }: IProps) {
  return (
    <div style={{}}>
      {history.map((squares, idxAsMove) => {
        let description;

        if (idxAsMove > 0) {
          description = "Go to move #" + idxAsMove;
        } else {
          description = "Go to game start";
        }

        return (
          <li key={idxAsMove}>
            <button onClick={() => jumpTo(idxAsMove)}>{description}</button>
          </li>
        );
      })}
    </div>
  );
}

export default HistoryBtns;
