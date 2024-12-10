import { render, screen } from "@testing-library/react";
import MuiMode from "./MuiMode";
import AppProviders from "components/Providers/AppProviders";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, { wrapper: AppProviders });

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
