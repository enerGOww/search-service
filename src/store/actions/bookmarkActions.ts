import {ADD_TO_BOOKMARK, DELETE_FROM_BOOKMARK} from "../actionTypes";
import {BookmarkAction} from './actionTypes';
import {bookmark} from '../../types';

export const addToBookmark = (item: bookmark): BookmarkAction => ({
  type: ADD_TO_BOOKMARK,
  payload: item
});

export const deleteFromBookmark = (id: string): BookmarkAction => ({
  type: DELETE_FROM_BOOKMARK,
  payload: id
});
