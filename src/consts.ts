export type navItem = {
  title: string,
  linkTo: string
}

export const navItems: navItem[] = [
  {title: 'Результаты Поиска', linkTo: '/'},
  {title: 'Закладки', linkTo: '/bookmarks'},
];

export const bookmarksLocalStorageKey: string = 'bookmarks';

export const apiUrl: string = 'https://www.googleapis.com/youtube/v3/search';
export const maxResultsResponse: number = 10;
export const apiKey = 'AIzaSyCZh9uEI9UmLtr33tykfU2O-OjS44Gq1-Y';
