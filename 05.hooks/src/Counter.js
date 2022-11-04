import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {value: state.value + 1}
            break;
        case 'DECREMENT':
            return {value: state.value - 1}
            break;
        default:
            return state
            break;    
    }
}


const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0})

  return (
  <div>
    <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
    </p>
    <button onClick={() => dispatch({})}>+1</button>
    <button onClick={}>-1</button>
  </div>
  );
};

export default Counter;
