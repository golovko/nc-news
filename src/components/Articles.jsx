import React, { useState, useEffect } from 'react';
import { getArticles } from '../../utils/api';
import { Link, useParams } from 'react-router-dom';

export default function Articles({ page, limit, sortBy, order }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, page, limit, sortBy, order)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setIsLoading(false);
        setIsError(null);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [topic, page, limit, sortBy, order]);
  return isError ? (
    <p>Something went wrong</p>
  ) : isLoading ? (
    <div className='loader'></div>
  ) : (
    <>
      <ul className='articles'>
        {articles.map((article) => {
          return (
            <li className='article' key={article.article_id}>
              <div className={'tag ' + article.topic}>{article.topic}</div>
              <figure>
                <img src={article.article_img_url} />
              </figure>
              <div className='art-text'>
                <Link to={'/articles/' + article.article_id}>
                  <h3>{article.title}</h3>
                </Link>
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
