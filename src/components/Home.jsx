import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PrintMenu from '../container-Print/PrintMenu';
import '../css/styles.css';
// import GetData from '../controllerAPI/GetData';
import SearchData from '../controllerAPI/Search';

const clientId = 'kwcGvKin0pLHWk6_pLuUKQpqiQMXN26K5hFoURVGHZM ';
const endPoint = 'https://api.unsplash.com/search/photos';

function Home() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState('Pink');
  const [page, setPage] = useState(2);

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    fetch(`${endPoint}?&per_page=20&page=1&query=${query}&client_id=${clientId}`)
      .then((response) => response.json()).then((jsonResponse) => {
        console.log(jsonResponse);
        setResult(jsonResponse.results);
      });
  }, []);

  const searchImages = () => {
    SearchData(query).then((jsonResponse) => (setResult(jsonResponse.results)))
      .catch((error) => console.log(`Error al realizar la petición:${error.message}`));
  };

  const moreImages = () => {
    setPage(page + 1);
    fetch(`${endPoint}?&per_page=20&page=${page}&query=${query}&client_id=${clientId}`)
      .then((response) => response.json()).then((jsonResponse) => {
        console.log(jsonResponse);
        setResult(result.concat(jsonResponse.results));
      }, []);
  };

  const PrintData = () => result.map((element) => (
    <img className="itemImage" src={element.urls.small} key={element.id} alt="images" />
  ));

  return (
    <div className="masonry">
      <PrintMenu Search={searchImages} handleQuery={handleQuery} query={query} />
      <div className="containerImages">
        <InfiniteScroll
          dataLength={result.length}
          hasMore
          next={moreImages}
        >
          {PrintData()}
        </InfiniteScroll>

      </div>
    </div>
  );
}

export default Home;
