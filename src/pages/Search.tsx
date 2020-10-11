import React from 'react';
import {Card, Button, Loader} from '../components';
import {useSelector, useDispatch} from 'react-redux';
import {addItems, changeIsLoading, rewriteNextPageToken} from '../store/actions/searchActions';
import {fetchByQueryAndNextPageToken} from '../api/youtubeApi';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const {items, nextPageToken, currentQuery, isLoading} = useSelector(({search}) => search);
  // @ts-ignore
  const {bookmarks} = useSelector(({bookmark}) => bookmark);

  const addMoreHandler = () => {
    dispatch(changeIsLoading(true));
    fetchByQueryAndNextPageToken(currentQuery, nextPageToken)
      .then((response) => response.json())
      .then((data) => {
        dispatch(rewriteNextPageToken(data.nextPageToken));
        dispatch(addItems(data.items));
      })
  }

  return (
    <>
      {items !== [] && items.map((item: any) => (
        <Card
          key={item.id.videoId}
          id={item.id.videoId}
          publishedAt={item.snippet.publishedAt}
          title={item.snippet.title}
          imgSrc={item.snippet.thumbnails.default.url}
          isBookmark={bookmarks.has(item.id.videoId)}
        />
      ))}
      {items.length !== 0 && isLoading === false &&
        <Button className='button--load-more' clickHandler={addMoreHandler}>Загрузить ещё...</Button>
      }
      {isLoading === true && <Loader />}
    </>
  );
};

export default Search;
