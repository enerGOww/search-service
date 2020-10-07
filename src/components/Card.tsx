import React from 'react';
import {convertDateToNormalFormat} from "../helpers";

type CardComponent = {
  id: string,
  publishedAt: string,
  title: string,
  imgSrc: string,
}

const Card = ({id, publishedAt, title, imgSrc}: CardComponent) => {
  console.log(id);
  return (
    <div className='card'>
      <div className='card__main-info'>
        <img className='card__img' src={imgSrc} alt='превью видео' />
        <div className='card__add-info'>
          <span className='card__published-at'>{convertDateToNormalFormat(publishedAt)}</span>
          <span className='material-icons card__icon'>bookmark</span>
        </div>
      </div>
      <span className='card__title'>{title}</span>
    </div>
  );
};

export default Card;
