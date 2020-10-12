import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../components';
import { RootState } from '../store/reducers';

const Bookmarks: React.FC = () => {
  const { bookmarks } = useSelector(({ bookmark }: RootState) => bookmark);
  const items: JSX.Element[] = [];
  bookmarks.forEach((item, key) => items.push(<Card {...item} key={key} isBookmark />));

  return (
    <>
      {items}
    </>
  );
};

export default Bookmarks;
