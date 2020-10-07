import {AnyAction, Reducer} from 'redux';
import {REWRITE_ITEMS} from '../actionTypes';

const initialState = {
  items: [],
};

const searchReducer: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case REWRITE_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    }
    default:
      return state;
  }
}

export default searchReducer;
