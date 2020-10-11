import React from 'react';
import {Card} from '../components';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducers';

const Bookmarks: React.FC = () => {
  const {bookmarks} = useSelector(({bookmark}: RootState) => bookmark);
  const items: any[] = [];
  bookmarks.forEach((item: any, key: string) => items.push(<Card {...item} key={key} isBookmark={true} />))

  return (
    <>
      {items}
    </>
  );
};

export default Bookmarks;
