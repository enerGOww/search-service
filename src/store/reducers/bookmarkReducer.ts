import {AnyAction, Reducer} from 'redux';
import {ADD_TO_BOOKMARK, DELETE_FROM_BOOKMARK} from '../actionTypes';
import {bookmarksLocalStorageKey} from '../../consts';
import {getStorageDataByKey, objectToMap, updateStorageByKeyAndState} from '../../helpers';

const initialState = {
  bookmarks: objectToMap(getStorageDataByKey(bookmarksLocalStorageKey))
}

const bookmarkReducer: Reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TO_BOOKMARK: {
      const oldState = {...state};
      oldState.bookmarks.set(action.payload.id, action.payload);
      updateStorageByKeyAndState(bookmarksLocalStorageKey, Object.fromEntries(oldState.bookmarks));
      return {
        ...state,
        bookmarks: oldState.bookmarks
      }
    }
    case DELETE_FROM_BOOKMARK: {
      const oldState = {...state};
      oldState.bookmarks.delete(action.payload);
      updateStorageByKeyAndState(bookmarksLocalStorageKey, Object.fromEntries(oldState.bookmarks));
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
