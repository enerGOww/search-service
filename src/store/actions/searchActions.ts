import {REWRITE_ITEMS, ADD_ITEMS} from '../actionTypes';

export const rewriteItems = (items: []) => ({
  type: REWRITE_ITEMS,
  payload: items
});

export const addItems = (items: []) => ({
  type: ADD_ITEMS,
  payload: items
});
