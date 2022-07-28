import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Home", () => {
  it("renders a heading", async () => {
    render(<Home />);

    const heading = await screen.findByText("Захиалгууд");

    expect(heading).toBeInTheDocument();
  });
});
