import React, { useCallback, useReducer } from "react";
import CounterOperations from "./CounterOperations";
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

  const dispatchAction = useCallback(
    (res: { type: "increment" | "decrement"; payload?: number }) => {
      dispatch(res);
    },
    []
  );

  return (
    <div>
      <h4>Counter Page</h4>
      <CounterOperations dispatch={dispatchAction} />
      <p data-testid="counter-value">{state.counter}</p>
      <div>
        <input
          type="text"
          placeholder="user-name"
          defaultValue={"Ajay"}
          onChange={(e) => console.log(e)}
        />
      </div>
    </div>
  );
}

export default Counter;
