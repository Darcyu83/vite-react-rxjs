import Receiver from "./eventEmitter/Receiver/Receiver";
import Sender from "./eventEmitter/Sender/Sender";
import WorkerThread from "./multiThread/WorkerThread";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test event emitter</h1>
      <Sender />
      <Receiver />

      <hr />

      <WorkerThread />
    </div>
  );
}

export default App;
