import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders welcome message", () => {
  render(<Home />);
  const message = screen.getByText(/Welcome to My Portfolio/i);
  expect(message).toBeInTheDocument();
});
