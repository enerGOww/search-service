import {IBookmark, Item} from '../../types';


export type BookmarkState = {
  bookmarks: Map<string, IBookmark>
}

export type SearchState = {
  items: Item[],
  nextPageToken: string,
  currentQuery: string,
  isLoading: boolean
}
