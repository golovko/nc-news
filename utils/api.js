import axios from 'axios';

const ncMarketPlace = axios.create({
  baseURL: 'https://nc-news-be-ntk2.onrender.com/api',
});

export const getArticles = () => {
  return ncMarketPlace.get('/articles').then((res) => {
    return res.data.articles;
  });
};
