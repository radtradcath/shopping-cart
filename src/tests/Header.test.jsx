import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";

describe("Header component", () => {
  it("renders header", () => {
    render(<Header />);

    expect(screen.getByRole("anchor").textContent).toMatch(/Home/);
  });
});
