import React from "react";

type Action = {
  type: "increment" | "decrement";
  payload?: number;
};

interface CounterOperationsProps {
  dispatch: (action: Action) => void;
}

function CounterOperations({ dispatch }: CounterOperationsProps) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default CounterOperations;
