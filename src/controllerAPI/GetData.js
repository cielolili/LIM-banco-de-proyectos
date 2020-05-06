const clientID = 'd2mtAfA49OpMr-XGxS-8jyfpUL1Qpm6uaQ3fXNZpZzQ';
// const endPoint = 'https://api.unsplash.com/search/photos';

const GetData = (page) => fetch(`https://api.unsplash.com/photos/?&page=${page}&per_page=20&client_id=${clientID}`).then((res) => res.json());

export default GetData;
