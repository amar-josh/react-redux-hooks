import React, { useReducer } from "react";
interface CounterState {
  counter: number;
}

interface Action {
  type: "increment" | "decrement";
  payload?: number;
}

let initialState: CounterState = {
  counter: 0,
};

const reducer = (state: CounterState, action: Action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + (action.payload || 1) };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Counter Page</h4>
      <button
        onClick={() => dispatch({ type: "increment", payload: 1 })}
        id="Increment"
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <p data-testid="counter-value">{state.counter}</p>
    </div>
  );
}

export default Counter;
