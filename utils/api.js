import axios from 'axios';

const ncNewsBe = axios.create({
  baseURL: 'https://nc-news-be-ntk2.onrender.com/api',
});

export const getArticles = () => {
  return ncNewsBe.get('/articles').then((res) => {
    return res.data.articles;
  });
};

export const getSingleArticle = (articleId) => {
  return ncNewsBe.get(`/articles/${articleId}`).then((res) => {
    return res.data;
  });
};
