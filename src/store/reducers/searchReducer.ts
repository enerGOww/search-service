import {AnyAction, Reducer} from 'redux';
import {ADD_ITEMS, CHANGE_IS_LOADING, REWRITE_ITEMS, REWRITE_NEXT_PAGE_TOKEN} from '../actionTypes';

const initialState = {
  items: [],
  nextPageToken: '',
  currentQuery: '',
  isLoading: false
};

const searchReducer: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case REWRITE_ITEMS: {
      return {
        ...state,
        items: action.payload.items,
        currentQuery: action.payload.currentQuery,
        isLoading: false
      }
    }
    case REWRITE_NEXT_PAGE_TOKEN: {
      return {
        ...state,
        nextPageToken: action.payload
      }
    }
    case ADD_ITEMS: {
      const oldItems = state.items;
      const newItems = oldItems.concat(action.payload);
      return {
        ...state,
        items: newItems,
        isLoading: false
      }
    }
    case CHANGE_IS_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    default:
      return state;
  }
}

export default searchReducer;
