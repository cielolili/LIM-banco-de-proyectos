import React from 'react';

const PrintItemImages = ({ data }) => (

  <div>
    <div key={data.id} className="grid__item card">
      <div className="card__body">
        <img src={data} alt="Images" />
      </div>
    </div>
  </div>
);
export default PrintItemImages;