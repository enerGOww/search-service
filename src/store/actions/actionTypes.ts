import {
  ADD_TO_BOOKMARK,
  DELETE_FROM_BOOKMARK,
  REWRITE_ITEMS,
  ADD_ITEMS,
  REWRITE_NEXT_PAGE_TOKEN,
  CHANGE_IS_LOADING
} from '../actionTypes';
import {IBookmark} from '../../types';


interface IAddToBookmark {
  type: typeof ADD_TO_BOOKMARK,
  payload: IBookmark
}

interface IDeleteFromBookmark {
  type: typeof DELETE_FROM_BOOKMARK,
  payload: string
}

interface IRewriteItems {
  type: typeof REWRITE_ITEMS,
  payload: any
}

interface IAddItems {
  type: typeof ADD_ITEMS,
  payload: any[]
}

interface IRewriteNextPageToken {
  type: typeof REWRITE_NEXT_PAGE_TOKEN,
  payload: string
}

interface IChangeIsLoading {
  type: typeof CHANGE_IS_LOADING,
  payload: boolean
}

export type BookmarkAction = IAddToBookmark | IDeleteFromBookmark;
export type SearchAction = IRewriteItems | IAddItems | IRewriteNextPageToken | IChangeIsLoading;
