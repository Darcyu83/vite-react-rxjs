import Receiver from "./Receiver/Receiver";
import Sender from "./Sender/Sender";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Test event emitter</h1>
      <Sender />
      <Receiver />
    </div>
  );
}

export default App;
