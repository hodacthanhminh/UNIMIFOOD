// libs
import React from 'react';
import { useParams } from 'react-router-dom';

const Store = () => {
  const { id } = useParams();
  return (
    <div className="store-wrapper">
      <div className="store-wrapper-inner">
        <h1>
          Store id:
          {id}
        </h1>
      </div>
    </div>
  );
};

export default Store;
