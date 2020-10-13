import { bookmarksLocalStorageKey } from '../consts';
import { objectToMap } from '../helpers';
import { rewriteBookmark } from './actions/bookmarkActions';
import { IBookmark } from '../types';
import store from './store';

export function init(): void {
  window.onstorage = (event: StorageEvent) => {
    if(event.key === bookmarksLocalStorageKey) {
      const newValue = event.newValue || '{}';
      const newItems: Map<string, IBookmark> = objectToMap(JSON.parse(newValue));
      store.dispatch(rewriteBookmark(newItems));
    }
  }
}
