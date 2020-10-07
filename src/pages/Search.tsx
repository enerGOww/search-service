import React from 'react';
import {Card} from "../components";
import {useSelector} from 'react-redux';

const Search: React.FC = () => {
  // @ts-ignore
  const {items} = useSelector(({search}) => search);

  return (
    <>
      {items !== [] && items.map((item: any, index: number) => (
        <Card
          key={index}
          id={item.id.videoId}
          publishedAt={item.snippet.publishedAt}
          title={item.snippet.title}
          imgSrc={item.snippet.thumbnails.default.url}
        />
      ))}
    </>
  );

};

export default Search;
