import React, { useState, useEffect } from 'react';
import { getArticles } from '../../utils/api';
import { Link } from 'react-router-dom';

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  return isError ? (
    <p>Something went wrong</p>
  ) : isLoading ? (
    <div className='loader'></div>
  ) : (
    <>
      <h1>Articles</h1>
      <ul className='articles'>
        {articles.map((article) => {
          return (
            <li className='article' key={article.article_id}>
              <img src={article.article_img_url} />
              <div className='art-text'>
                <h2>{article.title}</h2>
                <h3>{article.topic}</h3>
                <div className='votes'>
                  <i className='fas fa-heart'></i>
                  <p>{article.votes}</p>
                  <p>Comments: {article.comment_count}</p>
                </div>
                <p>by {' ' + article.author}</p>
                <p>
                  published {' ' + new Date(article.created_at).toDateString()}
                </p>

                <Link to={'/articles/' + article.article_id}>Read more...</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
