import { render, screen, logRoles } from "@testing-library/react";
import Skills from "components/Skills/Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemsElements = screen.getAllByRole("listitem");
    expect(listItemsElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const buttonElement = screen.getByRole("button", { name: "Login" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });

    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning buttons is eventually displayed", async () => {
    const view = render(<Skills skills={skills} />);

    // logRoles(view.container);

    // screen.debug();

    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 },
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
