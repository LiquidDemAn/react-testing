import { render, screen } from "@testing-library/react";
import SecondCounter from "./SecondCounter";
import user from "@testing-library/user-event";

describe("SecondCounter", () => {
  test("renders correctly", () => {
    render(<SecondCounter count={0} />);
    const textElement = screen.getByText("Second Counter");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <SecondCounter
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    );

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await user.click(incrementButton);
    await user.click(decrementButton);

    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
