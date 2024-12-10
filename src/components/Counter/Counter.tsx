import { ChangeEvent, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const onChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.target.value));
  };

  const handleSetAmount = () => {
    setCount(amount);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increment</button>
      <input type="number" name="amount" onChange={onChangeAmount} />
      <button onClick={handleSetAmount}>Set</button>
    </div>
  );
};

export default Counter;
