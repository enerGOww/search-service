import {ADD_TO_BOOKMARK, DELETE_FROM_BOOKMARK} from "../actionTypes";

export const addToBookmark = (item: any) => ({
  type: ADD_TO_BOOKMARK,
  payload: item
});

export const deleteFromBookmark = (id: string) => ({
  type: DELETE_FROM_BOOKMARK,
  payload: id
});
