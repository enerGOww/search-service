import {REWRITE_ITEMS, ADD_ITEMS, REWRITE_NEXT_PAGE_TOKEN, CHANGE_IS_LOADING} from '../actionTypes';
import {SearchAction} from './actionTypes';

export const rewriteItems = (items: [], currentQuery: string): SearchAction => ({
  type: REWRITE_ITEMS,
  payload: {
    items,
    currentQuery
  }
});

export const addItems = (items: []): SearchAction => ({
  type: ADD_ITEMS,
  payload: items
});

export const rewriteNextPageToken = (token: string): SearchAction => ({
  type: REWRITE_NEXT_PAGE_TOKEN,
  payload: token
});

export const changeIsLoading = (value: boolean): SearchAction => ({
  type: CHANGE_IS_LOADING,
  payload: value
});
