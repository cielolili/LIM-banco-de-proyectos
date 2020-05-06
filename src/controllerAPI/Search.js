const clientID = 'd2mtAfA49OpMr-XGxS-8jyfpUL1Qpm6uaQ3fXNZpZzQ';
// const endPoint = 'https://api.unsplash.com/search/photos';

const SearchData = (query) => fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${query}&client_id=${clientID}`).then((res) => res.json());

export default SearchData;