import { ADD_TO_BOOKMARK, DELETE_FROM_BOOKMARK, REWRITE_BOOKMARK } from '../actionTypes';
import { bookmarksLocalStorageKey } from '../../consts';
import { getStorageDataByKey, objectToMap, updateStorageByKeyAndState } from '../../helpers';
import { BookmarkAction } from '../actions/actionTypes';
import { BookmarkState } from './reducerTypes';

const initialState: BookmarkState = {
  bookmarks: objectToMap(getStorageDataByKey(bookmarksLocalStorageKey)),
};

const bookmarkReducer = (state = initialState, action: BookmarkAction): BookmarkState => {
  switch (action.type) {
    case ADD_TO_BOOKMARK: {
      const oldState = { ...state };
      oldState.bookmarks.set(action.payload.id, action.payload);
      updateStorageByKeyAndState(bookmarksLocalStorageKey, Object.fromEntries(oldState.bookmarks));
      return {
        ...state,
        bookmarks: oldState.bookmarks,
      };
    }
    case DELETE_FROM_BOOKMARK: {
      const oldState = { ...state };
      oldState.bookmarks.delete(action.payload);
      updateStorageByKeyAndState(bookmarksLocalStorageKey, Object.fromEntries(oldState.bookmarks));
      return {
        ...state,
        bookmarks: oldState.bookmarks,
      };
    }
    case REWRITE_BOOKMARK: {
      const oldState = { ...state };
      oldState.bookmarks = action.payload
      return {
        ...state,
        bookmarks: oldState.bookmarks
      }
    }
    default:
      return state;
  }
};

export default bookmarkReducer;
