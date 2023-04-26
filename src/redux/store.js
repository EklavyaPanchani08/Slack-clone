import { createStore } from 'redux';

const initialState = {};

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE':
        return {
          ...state,
          data: action.payload
        };
      default:
        return state;
    }
  }
  
  const store = createStore(reducer);
  
  export default {store};