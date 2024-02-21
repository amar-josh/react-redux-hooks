import { fireEvent, render, screen } from "@testing-library/react";
import CounterOperations from "../Components/Counter/CounterOperations";

const dispatch = jest.fn();

test("Function callbacks", () => {
  render(<CounterOperations dispatch={dispatch} />);
  const incrementBtn = screen.getByText("Increment");
  fireEvent.click(incrementBtn);
  expect(dispatch).toHaveBeenCalledWith({ type: "increment" });
  const decrementBtn = screen.getByText("Decrement");
  fireEvent.click(decrementBtn);
  expect(dispatch).toHaveBeenCalledWith({ type: "decrement" });
});
