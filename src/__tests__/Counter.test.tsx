import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "../Components/Counter/Counter";

test("render Page header", () => {
  render(<Counter />);
  const element = screen.getByText(/Counter Page/i);
  expect(element).toBeInTheDocument();
  const btnIncrement = screen.getByText(/Increment/);
  const btnDecrement = screen.getByText(/Decrement/);
  expect(btnIncrement).toBeInTheDocument();
  expect(btnDecrement).toBeInTheDocument();
});

test("render buttons", () => {
  render(<Counter />);
  const btnIncrement = screen.getByText("Increment");
  const btnDecrement = screen.getByText("Decrement");
  expect(btnIncrement).toBeInTheDocument();
  expect(btnDecrement).toBeInTheDocument();
});

test("Zero as default value", () => {
  render(<Counter />);
  const element = screen.getByTestId("counter-value");
  let value = element.textContent;
  expect(value).toBe("0");
});

test("Increment Functionality", () => {
  render(<Counter />);
  const IncrementButton = screen.getByText("Increment");
  fireEvent.click(IncrementButton);
  const element = screen.getByTestId("counter-value");
  const value = element.textContent;
  expect(value).toBe("1");
});

test("Decrement Functionality", () => {
  render(<Counter />);
  let IncrementButton = screen.getByText("Increment");
  fireEvent.click(IncrementButton); // 1
  fireEvent.click(IncrementButton); // 2
  fireEvent.click(IncrementButton); // 3
  let DecrementButton = screen.getByText("Decrement");
  const element = screen.getByTestId("counter-value");
  fireEvent.click(DecrementButton);
  expect(element.textContent).toBe("2");
});
