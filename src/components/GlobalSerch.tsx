import React from 'react';
import {Button} from './index';
import {useDispatch} from 'react-redux';
import {changeIsLoading, rewriteItems, rewriteNextPageToken} from "../store/actions/searchActions";

const GlobalSearch: React.FC = () => {
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(changeIsLoading(true));
    // @ts-ignore
    const query: string = inputRef.current.value;
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=10&key=AIzaSyCZh9uEI9UmLtr33tykfU2O-OjS44Gq1-Y`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(rewriteNextPageToken(data.nextPageToken))
        dispatch(rewriteItems(data.items, query))
      })
  };

  return (
    <div className='search'>
      <span className='material-icons search__icon'>search</span>
      <div className='search__form'>
        <input className='search__input' type='text' placeholder='Найти' ref={inputRef} />
        <Button clickHandler={clickHandler}>Найти</Button>
      </div>
    </div>
  );
};

export default GlobalSearch;
