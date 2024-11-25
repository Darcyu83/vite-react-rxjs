import { MyPromise } from "./MyPromise";

interface IProps {}



function PromiseFromScratch(props: IProps) {
  

  const testPromise = () => {
    // new Promise<string>((resolve :PromiseLike, reject) => {});
    return new MyPromise((resolve, reject) => {
      // resolve(10);
      reject(10);
    })
      .then((value) => {
        console.log("then value1", value);
        return value;
      })
      .then((value) => {
        console.log("then value2", value);
        throw new Error(`${value}`);
      })
      .catch((reason) => {
        console.log("reason1", reason);
        throw new Error(`from reason1 :: ${reason}`);
      })
      .catch((reason) => console.log("reason2", reason));
  };

  return (
    <div style={{}}>
      <h1>PromiseFromScratch</h1>
      <button onClick={testPromise}>testPromise</button>
     
    </div>
  );
}

export default PromiseFromScratch;
