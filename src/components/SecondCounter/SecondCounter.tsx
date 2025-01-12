import { SecondCounterProps } from "./types";

const SecondCounter = ({
  count,
  handleIncrement,
  handleDecrement,
}: SecondCounterProps) => {
  return (
    <div>
      <h1>Second Counter</h1>
      {count}
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};

export default SecondCounter;
