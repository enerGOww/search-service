import {AnyAction, Reducer} from 'redux';
import {ADD_TO_BOOKMARK, DELETE_FROM_BOOKMARK} from "../actionTypes";

const initialState = {
  bookmarks: new Map()
}

const bookmarkReducer: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK: {
      const oldState = {...state};
      oldState.bookmarks.set(action.payload.id, action.payload);
      return {
        ...state,
        bookmarks: oldState.bookmarks
      }
    }
    case DELETE_FROM_BOOKMARK: {
      const oldState = {...state};
      oldState.bookmarks.delete(action.payload);
      return {
        ...state,
        bookmarks: oldState.bookmarks
      }
    }
    default:
      return state
  }
}

export default bookmarkReducer;
