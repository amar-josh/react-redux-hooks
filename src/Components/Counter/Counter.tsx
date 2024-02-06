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
      <p>Counter</p>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        increment
      </button>
      <span></span>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <p> {state.counter}</p>
    </div>
  );
}

export default Counter;
