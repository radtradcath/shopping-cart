import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { cleanup } from "@testing-library/react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Router from "../components/Router";
import userEvent from "@testing-library/user-event";

describe("Test header functionalities", () => {
  it("Match snapshot", () => {
    const { container } = render(
      <Router>
        <Layout />
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  it("Link to shop correctly", async () => {
    const user = userEvent.setup();

    render(
      <Router>
        <Header />
      </Router>
    );

    const shopLink = screen.getByText('Shop');

    await user.click(shopLink);

    expect(screen.getByRole("heading").textContent).toMatch("Shop Page");
  });

  it("Link to cart correctly", async () => {
    const user = userEvent.setup();

    render(
      <Router>
        <Header />
      </Router>
    );

    const cartLink = screen.getByText('Cart');

    await user.click(cartLink);

    expect(screen.getByRole("heading").textContent).toMatch("Cart Page");
  });
});
