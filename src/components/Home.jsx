import React, { useState, useEffect } from 'react';
import ItemImages from '../container-Print/ItemImages';

const Home = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const clientId = 't9y3MmVIo9_idKGGiynTPnDh_Za7L0KMl6kz82eFy8c';
  const endPoint = 'https://api.unsplash.com/search/photos';
  const url3 = `${endPoint}?query=$${query}&per_page=30&client_id=${clientId}`;

  // input
  function handleChange(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }
  // botones
  function GetData() {
    fetch(url3).then((response) => response.json()).then((jsonResponse) => {
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

  let component;
  if (query) {
    component = result.map((element) => <ItemImages key={element.id} data={element.urls.small} />);
  } else {
    component = result
      .map((element) => <img alt="photos" src={element.urls.small} key={element.id} />);
  }
  return (

    <div>

      <h1>Pinterest</h1>
      <button
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
      <div>
        {component}
      </div>
    </div>
  );
};

export default Home;