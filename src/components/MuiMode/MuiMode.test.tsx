import MuiMode from "./MuiMode";
import { render, screen } from "utils/test-utils";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
