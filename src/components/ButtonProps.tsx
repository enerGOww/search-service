import React from 'react';

type ButtonProps = {
  children: string,
  clickHandler: () => void,
  className?: string
}

const Button = ({ children, clickHandler, className = '' }: ButtonProps) => (
  <button className={`button ${className}`} onClick={() => clickHandler()}>{children}</button>
);

export default Button;
