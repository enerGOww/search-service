import {IBookmark} from '../../types';


export type BookmarkState = {
  bookmarks: Map<string, IBookmark>
}

export type SearchState = {
  items: any[],
  nextPageToken: string,
  currentQuery: string,
  isLoading: boolean
}
