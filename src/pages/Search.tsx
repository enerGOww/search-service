import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Button, Loader } from '../components';
import { addItems, changeIsLoading, rewriteNextPageToken } from '../store/actions/searchActions';
import { fetchByQueryAndNextPageToken } from '../api/youtubeApi';
import { RootState } from '../store/reducers';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const {
    items, nextPageToken, currentQuery, isLoading,
  } = useSelector(({ search }: RootState) => search);
  const { bookmarks } = useSelector(({ bookmark }: RootState) => bookmark);

  const addMoreHandler = () => {
    dispatch(changeIsLoading(true));
    fetchByQueryAndNextPageToken(currentQuery, nextPageToken)
      .then((response) => response.json())
      .then((data) => {
        dispatch(rewriteNextPageToken(data.nextPageToken));
        dispatch(addItems(data.items));
      });
  };

  return (
    <>
      {items !== [] && items.map((item) => (
        <Card
          key={item.id.videoId}
          id={item.id.videoId}
          publishedAt={item.snippet.publishedAt}
          title={item.snippet.title}
          imgSrc={item.snippet.thumbnails.default.url}
          isBookmark={bookmarks.has(item.id.videoId)}
        />
      ))}
      {items.length !== 0 && !isLoading
        && <Button className="button--load-more" clickHandler={addMoreHandler}>Загрузить ещё...</Button>}
      {isLoading && <Loader />}
    </>
  );
};

export default Search;
