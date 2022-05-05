import axios from 'axios';

//const url = 'https://newsapi.org/v2/everything?q=Apple&from=2022-04-29&sortBy=popularity&apiKey=a33b418fcf8747e0af63342ede078bde';
const url = 'https://newsapi.org/v2/everything';
const apiKeys = {
  1: 'a33b418fcf8747e0af63342ede078bde',
  2: '8b4a6567fd564ea690b1aeb33bda7216',
};

const getNews = (items, apiKeyNumber) => {
  return axios.get(`${url}?q=${items}&apiKey=${apiKeys[apiKeyNumber]}`).then((res) => res.data.articles);
};

export { getNews };
