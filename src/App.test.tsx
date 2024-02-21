import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render Text message", () => {
  render(<App />);
  let element = screen.getByText(/First Test/i);
  expect(element).toBeInTheDocument();
});
