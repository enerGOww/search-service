import {REWRITE_ITEMS, ADD_ITEMS, REWRITE_NEXT_PAGE_TOKEN, CHANGE_IS_LOADING} from '../actionTypes';

export const rewriteItems = (items: [], currentQuery: string) => ({
  type: REWRITE_ITEMS,
  payload: {items, currentQuery}
});

export const addItems = (items: []) => ({
  type: ADD_ITEMS,
  payload: items
});

export const rewriteNextPageToken = (token: string) => ({
  type: REWRITE_NEXT_PAGE_TOKEN,
  payload: token
});

export const changeIsLoading = (value: boolean) => ({
  type: CHANGE_IS_LOADING,
  payload: value
});
