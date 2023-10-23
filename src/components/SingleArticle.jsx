import React, { useState, useEffect } from 'react';
import { getSingleArticle } from '../../utils/api';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Comments from './Comments';

export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const { article_id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
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
      <article className='single-article'>
        <img src={article.article_img_url} />
        <div className='art-text'>
          <h1>{article.title}</h1>
          <h3>{article.topic}</h3>
          <div className='votes'>
            <i className='fas fa-heart'></i>
            <p>{article.votes}</p>
            <p>Comments: {article.comment_count}</p>
          </div>
          <p>by {' ' + article.author}</p>
          <p>{article.body}</p>
        </div>
      </article>
      <Comments />
    </>
  );
}
