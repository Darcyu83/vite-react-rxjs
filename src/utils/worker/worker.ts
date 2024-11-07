import { WorkerPostMessageType, WorkerResult } from "./types";

self.addEventListener("message", async (e) => {
  const { numberStr }: WorkerPostMessageType = e.data;

  const numberParsed = parseInt(numberStr, 10);

  console.log(
    "%c 2::  클릭과 함께 postMessage to worker -> worker.js 계산시작",
    "color: yellow",
    numberParsed
  );

  try {
    if (isNaN(numberParsed)) {
      throw new Error("Invalid number :: yuds");
    }

    const isDone = await new Promise((res, rej) => {
      setTimeout(() => {
        console.log(
          "%c 3::  클릭과 함께 postMessage to worker -> worker.js 계산시작 -> async 연산 2초 후 응답",
          "color: yellow"
        );
        res(true);
      }, 2000);
    });

    const result: WorkerResult = { result: numberParsed * 100 };
    postMessage(result);
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = {
        error: true,
        message: error.message,
        stack: error.stack, // Send the stack trace for debugging purposes
      };
      postMessage(errorMessage);
    }

    return;
  }
});
