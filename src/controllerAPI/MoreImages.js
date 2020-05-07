const clientId = 'kwcGvKin0pLHWk6_pLuUKQpqiQMXN26K5hFoURVGHZM';
const endPoint = 'https://api.unsplash.com/search/photos';


const MoreImages = (page, query) => fetch(`${endPoint}?per_page=20&page=${page}&query=${query}&client_id=${clientId}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.json());
export default MoreImages;
