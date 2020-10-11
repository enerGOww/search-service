import React from 'react';
import {Card} from '../components';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducers';

const Bookmarks: React.FC = () => {
  const {bookmarks} = useSelector(({bookmark}: RootState) => bookmark);
  const items: JSX.Element[] = [];
  bookmarks.forEach((item, key) => items.push(<Card {...item} key={key} isBookmark={true} />))

  return (
    <>
      {items}
    </>
  );
};

export default Bookmarks;
