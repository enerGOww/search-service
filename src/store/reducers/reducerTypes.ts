import {bookmark} from '../../types';


export type BookmarkState = {
  bookmarks: Map<string, bookmark>
}

export type SearchState = {
  items: any[],
  nextPageToken: string,
  currentQuery: string,
  isLoading: boolean
}
