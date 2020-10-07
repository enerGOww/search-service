import React from 'react';

const Button: React.FC<{ children: string, clickHandler: () => void}> =
  ({ children , clickHandler}) => {
  return (
    <button className='button' onClick={() => clickHandler()}>{children}</button>
  );
};

export default Button;
