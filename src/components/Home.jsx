import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PrintMenu from '../container-Print/PrintMenu';
import ModalPrint from '../container-Print/ModalPrint';

import '../css/styles.css';
// import GetData from '../controllerAPI/GetData';
import MoreImages from '../controllerAPI/MoreImages';
import SearchData from '../controllerAPI/SearchData';

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
    setTimeout(() => {
      setPage(page + 1);
      MoreImages(page, query).then((jsonResponse) => (setResult(result.concat(jsonResponse.results))))
        .catch((error) => console.log(`Error al realizar la petición:${error.message}`));
    }, 1000);
  };
  const PrintData = () => result.map((element) => (
    <ModalPrint
      img={element.urls.thumb}
      profileUser={element.user.profile_image.small}
      name={element.user.name}
      likes={element.user.total_likes}
      description={element.alt_description}
      download={element.links.download}
      key={element.id}
    />
  ));
  return (
    <div className="masonry">
      <PrintMenu Search={searchImages} handleQuery={handleQuery} query={query} />
      <div className="containerImages">
        <InfiniteScroll
          dataLength={result.length}
          hasMore
          next={moreImages}
          loader={(
            <div className="loading">
              <div className="loading-text">
                <span className="loading-text-words">L</span>
                <span className="loading-text-words">O</span>
                <span className="loading-text-words">A</span>
                <span className="loading-text-words">D</span>
                <span className="loading-text-words">I</span>
                <span className="loading-text-words">N</span>
                <span className="loading-text-words">G</span>
              </div>
            </div>
)}

        >
          {PrintData()}
        </InfiniteScroll>

      </div>
    </div>
  );
}

export default Home;
