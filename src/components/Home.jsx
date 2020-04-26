import React, { useState, useEffect } from 'react';
import PrintMenu from '../container-Print/PrintMenu';
import '../css/styles.css';

const Home = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const clientId = 'kwcGvKin0pLHWk6_pLuUKQpqiQMXN26K5hFoURVGHZM';
  const endPoint = 'https://api.unsplash.com/search/photos';
  const url = `${endPoint}?query=$${query}&per_page=20&client_id=${clientId}`;

  // input
  function handleChange(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }
  // botones
  function GetData() {
    fetch(url, {
      method: 'GET',
    }).then((response) => response.json()).then((jsonResponse) => {
      console.log(jsonResponse);
      setResult(jsonResponse.results);
    }).catch((error) => console.log(`Error al realizar la petición:${error.message}`));
  }
  useEffect(() => {
    GetData();
  }, [query]);

  // para capturar el valor de cada query
  const handleQuery = (tipo) => {
    setQuery(tipo);
  };

  /* let component;
  if (query) {
    component = result.map((element) => <ItemImages key={element.id} data={element.urls.small} />);
  } else {
    component = result
      .map((element) => <img alt="photos" src={element.urls.small} key={element.id} className="card-image" />);
  } */
  const PrintData = () => result.map((element) => (
    <img className="itemImage" src={element.urls.small} key={element.id} alt="images" />
  ));
  return (

    <div className="masonry">
      <PrintMenu GetData={GetData} handleChange={handleChange} handleQuery={handleQuery} query={query} />

      {/* <button
        onClick={(event) => {
          event.preventDefault();
          GetData();
        }}
        type="button"
        alt="search"
      >
        Buscar
      </button>
      <input className="inputHome" onChange={handleChange} type="input" placeholder="buscar fotos" />

      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleQuery('Mickey');
        }}

        value="Mickey"
      >
        Mickey
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleQuery('Books');
        }}

        value="Books"
      >
        Books
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleQuery('Card');
        }}

        value="Card"
      >
        Card
      </button> */}
      <div className="containerImages">
        {PrintData()}
      </div>
    </div>
  );
};

export default Home;
