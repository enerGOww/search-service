import React from 'react';

type button = {
  children: string,
  clickHandler: () => void,
  className?: string
}

const Button = ({ children , clickHandler, className= ''}: button) => {
  return (
    <button className={`button ${className}`} onClick={() => clickHandler()}>{children}</button>
  );
};

export default Button;
