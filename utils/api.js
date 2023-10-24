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

export const updateArticle = (articleId, update) => {
  return ncNewsBe
    .patch(`/articles/${articleId}`, { inc_votes: update })
    .then((res) => {
      return res.data;
    });
};

export const getComments = (articleId) => {
  return ncNewsBe.get(`/articles/${articleId}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const updateComment = (commentId, update) => {
  return ncNewsBe
    .patch(`/comments/${commentId}`, { inc_votes: update })
    .then((res) => {
      return res.data;
    });
};
