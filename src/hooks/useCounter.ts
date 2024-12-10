import { useState } from "react";

export type UseCounterProps = {
  initialCount?: number;
};

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  return {
    count,
    increment,
    decrement,
  };
};
