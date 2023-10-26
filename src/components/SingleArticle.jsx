import React, { useState, useEffect } from 'react';
import { getSingleArticle, updateArticle } from '../../utils/api';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import Vote from './Vote';
import NotFound from './errors/NotFound';
import BadRequest from './errors/BadRequest';

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
        setIsError(null);
      })
      .catch((err) => {
        setIsError(err.response.status);
        setIsLoading(false);
      });
  }, []);

  return isError ? (
    isError === 404 ? (
      <NotFound />
    ) : (
      <>
        <h2>Something really bad happened 😱</h2>
        <BadRequest />
      </>
    )
  ) : isLoading ? (
    <div className='loader'></div>
  ) : (
    <article>
      <h1>{article.title}</h1>

      <div className='single-article'>
        <div className={'tag ' + article.topic}>{article.topic}</div>
        <img src={article.article_img_url} />
        <div className='art-text'>
          <h3>{article.topic}</h3>
          <Vote
            id={article.article_id}
            type='heart'
            votes={article.votes}
            update={updateArticle}
          />
          <p>Comments: {article.comment_count}</p>
          <p>by {' ' + article.author}</p>
          <p> published {' ' + new Date(article.created_at).toDateString()}</p>
          <p>{article.body}</p>
        </div>
      </div>
      <Comments article_id={article_id} />
    </article>
  );
}
