import React from 'react';
import {Card} from '../components';
import {useSelector} from 'react-redux';

const Bookmarks: React.FC = () => {
  // @ts-ignore
  const {bookmarks} = useSelector(({bookmark}) => bookmark);
  const items: any[] = [];
  bookmarks.forEach((item: any, key: string) => items.push(<Card {...item} key={key} isBookmark={true} />))

  return (
    <>
      {items}
    </>
  );
};

export default Bookmarks;
