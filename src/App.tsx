import Receiver from "./eventEmitter/Receiver/Receiver";
import Sender from "./eventEmitter/Sender/Sender";
import WorkerThread from "./multiThread/WorkerThread";
import TicTacToeGame from "./tickTacToe";

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
    </div>
  );
}

export default App;
