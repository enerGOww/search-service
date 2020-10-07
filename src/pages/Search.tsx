import React from 'react';
import {Card, Button, Loader} from '../components';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {addItems, changeIsLoading, rewriteNextPageToken} from '../store/actions/searchActions';

const Search: React.FC = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const {items, nextPageToken, currentQuery, isLoading} = useSelector(({search}) => search);

  const addMoreHandler = () => {
    dispatch(changeIsLoading(true))
    console.log(isLoading)
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${currentQuery}&type=video&pageToken=${nextPageToken}&maxResults=10&key=AIzaSyCZh9uEI9UmLtr33tykfU2O-OjS44Gq1-Y`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(rewriteNextPageToken(data.nextPageToken));
        dispatch(addItems(data.items));
      })
  }

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
      {items.length !== 0 && isLoading === false &&
        <Button className='button--load-more' clickHandler={addMoreHandler}>Загрузить ещё...</Button>
      }
      {isLoading === true && <Loader />}
    </>
  );
};

export default Search;
