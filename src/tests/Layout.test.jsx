import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout/Layout";
import Router from "../components/Router";
import { expect } from "vitest";

describe("Layout component", () => {
  it("renders layout correctly", () => {
    render(
      <Router>
        <Layout />
      </Router>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
