import { navItem } from './types';

export const navItems: navItem[] = [
  { title: 'Результаты Поиска', linkTo: '/' },
  { title: 'Закладки', linkTo: '/bookmarks' },
];

export const bookmarksLocalStorageKey: string = 'bookmarks';

export const apiUrl: string = 'https://www.googleapis.com/youtube/v3/search';
export const maxResultsResponse: number = 10;
export const apiKey: string = process.env.REACT_APP_NOT_SECRET_CODE || '';
