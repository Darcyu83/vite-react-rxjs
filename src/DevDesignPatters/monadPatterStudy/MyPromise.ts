/* eslint-disable @typescript-eslint/no-explicit-any */
export type Executor<T> = (
  resolve: (value: T) => void,
  reject: (reason: any) => void
) => void;

type OnSuccess<T, U> = (value: T) => U | MyPromise<U>;
type OnError<U> = (reason: any) => U | MyPromise<U>;

export class MyPromise<T> {
  private status: "pending" | "fulfilled" | "rejected" = "pending";
  private value!: T;
  private handlers: Array<(value: T) => void> = [];
  private catchers: Array<(reason: any) => void> = [];

  // constructor(executor: Executor<T>) {
  constructor(
    executor: (
      resolve: (value: T) => void,
      reject: (reason: any) => void
    ) => void
  ) {
    const resolve = (value: T): void => {
      if (this.status !== "pending") return;

      this.status = "fulfilled";
      this.value = value;
      this.handlers.forEach((handler) => handler(value));
    };

    const reject = (reason: any): void => {
      if (this.status !== "pending") return;

      this.status = "rejected";
      this.value = reason;
      this.catchers.forEach((catcher) => catcher(reason));
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  // 'then' method (bind in monadic terms)
  then<U>(onSuccess: OnSuccess<T, U>): MyPromise<U> {
    return new MyPromise<U>((resolve, reject) => {
      const handleSuccess = (value: T): void => {
        try {
          const result = onSuccess(value);

          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === "fulfilled") {
        handleSuccess(this.value);
      } else if (this.status === "pending") {
        this.handlers.push(handleSuccess);
      }
    });
  }

  catch<U>(onError: OnError<U>): MyPromise<U> {
    return new MyPromise<U>((resolve, reject) => {
      const handleError = (reason: any) => {
        try {
          const result = onError(reason);
          if (result instanceof MyPromise) {
            result.then(resolve).catch(reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.status === "rejected") {
        handleError(this.value);
      } else if (this.status === "pending") {
        this.catchers.push(handleError);
      }
    });
  }

  static resolve<U>(value: U): MyPromise<U> {
    return new MyPromise<U>((resolve) => resolve(value));
  }

  static reject<U>(reason: any): MyPromise<U> {
    return new MyPromise<U>((_, reject) => reject(reason));
  }
}
