import { eventEmitter } from "../../utils/event/event";
import { EventNames } from "../../utils/event/eventNames";

interface IProps {}

function Sender(props: IProps) {
  return (
    <div style={{}}>
      <button
        onClick={() => {
          eventEmitter.emit(EventNames.MESSAGE, "Hello from Sender");
        }}
      >
        Send message.
      </button>
    </div>
  );
}

export default Sender;
