import { createStore } from 'redux';

export interface IStoreState {
  count: number
}

const initialState: IStoreState = {
  count: 0,
};

const ADD = 'ADD';
function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD:
      return { count: state.count + action.num };
    default:
      return state;
  }
}

export function add(num: number) {
  return {
    type: ADD,
    num
  }
}

const store = createStore(reducer, initialState);
export default store;
