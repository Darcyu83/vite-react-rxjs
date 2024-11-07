export class WorkerSingleton {
  private static instance: Worker | null = null;

  private constructor() {}

  public static getInstance(): Worker {
    if (!WorkerSingleton.instance) {
      WorkerSingleton.instance = new Worker(
        new URL("./worker.ts", import.meta.url),
        {
          type: "module",
        }
      );
    }
    return WorkerSingleton.instance;
  }

  public static terminateWorker() {
    if (WorkerSingleton.instance) {
      WorkerSingleton.instance.terminate();
      WorkerSingleton.instance = null;
    }
  }
}
