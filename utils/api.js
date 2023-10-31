import axios from 'axios';

const ncNewsBe = axios.create({
  baseURL: 'https://nc-news-be-ntk2.onrender.com/api',
});

export const getArticles = (
  topic,
  page = 1,
  limit = 9,
  sortBy = 'created_at',
  order = 'asc'
) => {
  return ncNewsBe
    .get('/articles/', {
      params: {
        topic: topic,
        p: page,
        limit: limit,
        sort_by: sortBy,
        order: order,
      },
    })
    .then((res) => {
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

export const postComment = (articleId, comment) => {
  return ncNewsBe
    .post(`/articles/${articleId}/comments/`, comment)
    .then((res) => {
      return res;
    });
};

export const deleteComment = (commentId) => {
  return ncNewsBe.delete(`/comments/${commentId}`).then((res) => {
    return res;
  });
};

export const getTopics = () => {
  return ncNewsBe.get('/topics').then((res) => {
    return res.data.topics;
  });
};

export const getUser = (username) => {
  return ncNewsBe.get('/users/' + username).then((res) => {
    return res.data;
  });
};
