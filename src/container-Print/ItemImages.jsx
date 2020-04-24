import React from 'react';
import PrintItemImages from './PrintItemImages';

const ItemImages = (props) => {
  const images = props.data;
  // const mandaData = data.map((element) => <PrintBooks key={element.id} data={element} />);
  const manda = <PrintItemImages data={images} />;


  return (

    <div>
      <ul>
        {/* <img src={images} /> */}
        {manda}
        {/* {mandaData} */}

      </ul>
    </div>
  );
};
export default ItemImages;