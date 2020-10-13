import {
  ADD_TO_BOOKMARK,
  DELETE_FROM_BOOKMARK,
  REWRITE_ITEMS,
  ADD_ITEMS,
  REWRITE_NEXT_PAGE_TOKEN,
  CHANGE_IS_LOADING,
  REWRITE_BOOKMARK
} from '../actionTypes';
import { IBookmark, Item } from '../../types';

interface IAddToBookmark {
  type: typeof ADD_TO_BOOKMARK,
  payload: IBookmark
}

interface IDeleteFromBookmark {
  type: typeof DELETE_FROM_BOOKMARK,
  payload: string
}

interface IRewriteBookmark {
  type: typeof REWRITE_BOOKMARK,
  payload: Map<string, IBookmark>
}

interface IRewriteItems {
  type: typeof REWRITE_ITEMS,
  payload: {items: Item[], currentQuery: string}
}

interface IAddItems {
  type: typeof ADD_ITEMS,
  payload: Item[]
}

interface IRewriteNextPageToken {
  type: typeof REWRITE_NEXT_PAGE_TOKEN,
  payload: string
}

interface IChangeIsLoading {
  type: typeof CHANGE_IS_LOADING,
  payload: boolean
}

export type BookmarkAction = IAddToBookmark | IDeleteFromBookmark | IRewriteBookmark;
export type SearchAction = IRewriteItems | IAddItems | IRewriteNextPageToken | IChangeIsLoading;
