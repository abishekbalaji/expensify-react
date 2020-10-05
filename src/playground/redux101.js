import { createStore } from "redux";

// Action functions
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count,
});

// Reducer

// Reducers specify how the application's state changes in response to actions sent 
// to the store. Remember that actions only describe what happened, but don't 
// describe how the application's state changes.

// (i) A reducer is a pure function.

// Pure function - a pure function is a function in which
// -- The output is only determined by the input. It doesnt use anything outside its 
// scope or change anything outside its scope.

// (ii) Never change current state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "RESET":
      return {
        count: 0,
      };
    case "SET":
      return {
        count: action.count,
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));

store.dispatch(setCount());
