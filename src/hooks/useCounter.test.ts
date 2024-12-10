import { renderHook } from "utils/test-utils";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCounter);
    const { count } = result.current;
    expect(count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    });

    const { count } = result.current;
    expect(count).toBe(10);
  });
});
