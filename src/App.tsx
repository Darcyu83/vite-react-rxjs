import Receiver from "./eventEmitter/Receiver/Receiver";
import Sender from "./eventEmitter/Sender/Sender";
import PromiseFromScratch from "./DevDesignPatters/monadPatterStudy/PromiseFromScratch";
import WorkerThread from "./multiThread/WorkerThread";
import TicTacToeGame from "./tickTacToe";
import StrategyPattern from "./DevDesignPatters/strategyPattern/StrategyPattern";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test event emitter</h1>
      <Sender />
      <Receiver />

      <hr />

      <WorkerThread />
      <hr />

      <TicTacToeGame />
      <hr />

      <PromiseFromScratch />
      <hr />

      <StrategyPattern />
    </div>
  );
}

export default App;
