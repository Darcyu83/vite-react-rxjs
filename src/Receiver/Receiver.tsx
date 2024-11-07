import { useEffect, useState } from "react";
import { eventEmitter, unsubscribe } from "../utils/event/event";
import { EventNames } from "../utils/event/eventNames";

interface IProps {}

function Receiver(props: IProps) {
  const [msg, setMsg] = useState("");
  useEffect(() => {
    eventEmitter.on(EventNames.MESSAGE, (message) => {
      console.log(`${EventNames.MESSAGE} :: `, message);
      setMsg(message);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div style={{}}>
      <h1>Receiver</h1>

      <h1>{msg}</h1>
    </div>
  );
}

export default Receiver;
