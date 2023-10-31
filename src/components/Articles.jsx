import React, { useState, useEffect } from 'react';
import { getArticles } from '../../utils/api';
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard';

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
          return <ArticleCard key={article.article_id} articleObj={article} />;
        })}
      </ul>
    </>
  );
}
