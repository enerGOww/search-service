import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className='loader'>
      <div className='loader__part loader__part--one' />
      <div className='loader__part loader__part--two' />
      <div className='loader__part loader__part--three' />
      <div className='loader__part loader__part--four' />
    </div>
  );
};

export default Loader;
