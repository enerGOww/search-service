import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from './index';
import { changeIsLoading, rewriteItems, rewriteNextPageToken } from '../store/actions/searchActions';
import { fetchByQuery } from '../api/youtubeApi';

const GlobalSearch: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null!);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(changeIsLoading(true));
    const query: string = inputRef.current.value;
    fetchByQuery(query)
      .then((response) => response.json())
      .then((data) => {
        dispatch(rewriteNextPageToken(data.nextPageToken));
        dispatch(rewriteItems(data.items, query));
      });
  };

  return (
    <div className="search">
      <span className="material-icons search__icon">search</span>
      <div className="search__form">
        <input className="search__input" type="text" placeholder="Найти" ref={inputRef} />
        <Button clickHandler={clickHandler}>Найти</Button>
      </div>
    </div>
  );
};

export default GlobalSearch;
