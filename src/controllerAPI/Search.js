const clientID = 'kwcGvKin0pLHWk6_pLuUKQpqiQMXN26K5hFoURVGHZM';
const endPoint = 'https://api.unsplash.com/search/photos';

const SearchData = (query) => fetch(`${endPoint}?per_page=20&query=${query}&client_id=${clientID}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json());
export default SearchData;
