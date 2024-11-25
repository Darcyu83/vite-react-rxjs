interface IProps {}

export type TestExecutor = (
  resolve: (value: number) => void,
  reject: (reason: unknown) => void
) => void;

function StrategyPattern(props: IProps) {
  const testFnAcceptingStrategyFnByUser = () => {
    // run 1
    console.log("run 1");
    const strategyFnByUser: TestExecutor = (resolve, reject) => {
      //! run 5
      console.log("run 5");

      const result = true;

      if (result) {
        resolve(100);
      } else {
        reject(new Error("Error Occured:: "));
      }
    };

    // run 2
    console.log("run 2");
    runMyLogicfixedAfterStrategyFnRan(strategyFnByUser);
  };

  const runMyLogicfixedAfterStrategyFnRan = (
    strategyFnByUser: TestExecutor
  ) => {
    // run 3
    console.log("run 3");
    console.log(
      "%c Subsequent Executor : === initalize(후속실행 함수 초기화) 1-1-1",
      "color: red",
      "\n"
      // strategyFnByUser
    );

    const resolveRanAfterStrategyFnByUser = () => {
      console.log("run 5-1");
      console.log("%c resolveRanAfterStrategyFnByUser :: 1", "color: orange");
    };
    const rejectRanAfterStrategyFnByUser = () => {
      console.log("run 5-2");
      console.log("%c rejectRanAfterStrategyFnByUser :: 1", "color: yellow");
    };

    // run 4
    console.log(
      "run 4 === 유저가 정의한 함수 실행 + 후속처리 resolve/reject 함수 전달"
    );
    strategyFnByUser(
      resolveRanAfterStrategyFnByUser,
      rejectRanAfterStrategyFnByUser
    );

    // run 6
    console.log("run 6");
    console.log(
      "%c Subsequent Executor : === initalize(후속실행 함수 초기화) 1-1-2",
      "color: red"
      // strategyFnByUser
    );
  };

  return (
    <div style={{}}>
      <h1>StrategyPattern</h1>
      <button onClick={testFnAcceptingStrategyFnByUser}>
        testFnAcceptsFnsAsArgs
      </button>
    </div>
  );
}

export default StrategyPattern;
