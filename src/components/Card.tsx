import React from 'react';
import { useDispatch } from 'react-redux';
import { convertDateToNormalFormat } from '../helpers';
import { addToBookmark, deleteFromBookmark } from '../store/actions/bookmarkActions';
import { IBookmark } from '../types';

interface CardComponentProps extends IBookmark{
  isBookmark: boolean
}

const Card = ({
  id, publishedAt, title, imgSrc, isBookmark,
}: CardComponentProps) => {
  const dispatch = useDispatch();
  const [isActive, setActive] = React.useState(isBookmark);

  const toggleActive = () => {
    if (isActive) {
      dispatch(deleteFromBookmark(id));
    } else {
      dispatch(addToBookmark({
        id, publishedAt, title, imgSrc,
      }));
    }
    setActive(!isActive);
  };

  return (
    <div className="card">
      <div className="card__main-info">
        <img className="card__img" src={imgSrc} alt="превью видео" />
        <div className="card__add-info">
          <span className="card__published-at">{convertDateToNormalFormat(publishedAt)}</span>
          <span
            className={`material-icons card__icon ${isActive ? 'card__icon--active' : ''}`}
            onClick={toggleActive}
          >
            bookmark
          </span>
        </div>
      </div>
      <span className="card__title">{title}</span>
    </div>
  );
};

export default Card;
