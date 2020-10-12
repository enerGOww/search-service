import {
  ADD_ITEMS, CHANGE_IS_LOADING, REWRITE_ITEMS, REWRITE_NEXT_PAGE_TOKEN,
} from '../actionTypes';
import { SearchAction } from '../actions/actionTypes';
import { SearchState } from './reducerTypes';

const initialState: SearchState = {
  items: [],
  nextPageToken: '',
  currentQuery: '',
  isLoading: false,
};

const searchReducer = (state = initialState, action: SearchAction): SearchState => {
  switch (action.type) {
    case REWRITE_ITEMS: {
      return {
        ...state,
        items: action.payload.items,
        currentQuery: action.payload.currentQuery,
        isLoading: false,
      };
    }
    case REWRITE_NEXT_PAGE_TOKEN: {
      return {
        ...state,
        nextPageToken: action.payload,
      };
    }
    case ADD_ITEMS: {
      const oldState = { ...state };
      const newItems = oldState.items.concat(action.payload);
      return {
        ...state,
        items: newItems,
        isLoading: false,
      };
    }
    case CHANGE_IS_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
