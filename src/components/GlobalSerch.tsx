import React from 'react';
import {Button} from './index';
import {useDispatch} from 'react-redux';
import {rewriteItems} from "../store/actions/searchActions";

const GlobalSearch: React.FC = () => {
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();

  const clickHandler = () => {
    // @ts-ignore
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputRef.current.value}&type=video&maxResults=10&key=AIzaSyCZh9uEI9UmLtr33tykfU2O-OjS44Gq1-Y`)
      .then((response) => response.json())
      .then((data) => dispatch(rewriteItems(data.items)))
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
