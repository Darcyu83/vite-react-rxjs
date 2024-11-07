export interface WorkerPostMessageType {
  numberStr: string; // Number as a string to avoid leading zeros issues
}

export interface WorkerResult {
  result: number;
}

export interface WorkerError {
  error: string;
}
