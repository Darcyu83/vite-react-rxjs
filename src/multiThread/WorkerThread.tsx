import { useEffect, useState } from "react";
import { WorkerSingleton } from "../utils/worker/WorkerSingleton";

interface IProps {}

function WorkerThread(props: IProps) {
  const [numberStr, setNumberStr] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    console.log("value ===", value);
    // Check if the value is falsy, allow an empty string or 0
    if (value === "" || value === "0") {
      setNumberStr("0");
    } else {
      // Remove leading zeros (unless the value is "0")
      const noLeadingZeros = value.replace(/^0+/, "");
      setNumberStr(noLeadingZeros);
    }
  };

  useEffect(() => {
    const worker = WorkerSingleton.getInstance();

    worker.onmessage = (e: MessageEvent) => {
      setLoading(false);

      console.log(
        "%c 4::  클릭과 함께 postMessage to worker -> worker.js 계산시작 -> async 연산 2초 후 응답 -> worker.onmessage에서 결과 수신",
        "color: lime",
        e.data
      );

      if ("result" in e.data) {
        setResult(e.data.result);
      } else if ("error" in e.data) {
        alert("error customed :: " + e.data.message);
      }
    };

    worker.onerror = (e) => {
      console.log("Worker error :: ", e);
      setLoading(false);
    };

    return () => {
      WorkerSingleton.terminateWorker();
    };
  }, []);

  return (
    <div style={{}}>
      <h2>Worker Multi Thread</h2>
      <input type="number" value={numberStr} onChange={handleOnChange} />

      <button
        onClick={() => {
          console.log(
            "%c 1::  클릭과 함께 postMessage to worker",
            "color: yellow"
          );
          setLoading(true);
          WorkerSingleton.getInstance().postMessage({ numberStr });
        }}
        disabled={loading}
      >
        {loading ? "Calculating..." : "Calculate Factorial"}
      </button>
      {result !== null && (
        <p>
          Factorial of {numberStr} is: {result}
        </p>
      )}
    </div>
  );
}

export default WorkerThread;
