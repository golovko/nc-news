import React, { useState, useEffect } from 'react';
import { getArticles } from '../../utils/api';
import { Link } from 'react-router-dom';

const arts = [
  {
    author: 'grumpy19',
    title: 'The Notorious MSG’s Unlikely Formula For Success',
    article_id: 34,
    topic: 'cooking',
    created_at: '2020-11-22T11:13:00.000Z',
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
    comment_count: 11,
  },
  {
    author: 'tickle122',
    title: 'The battle for Node.js security has only begun',
    article_id: 12,
    topic: 'coding',
    created_at: '2020-11-15T13:25:00.000Z',
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
    comment_count: 7,
  },
];

export default function Articles() {
  const [articles, setArticles] = useState(arts);
  useEffect(() => {
    getArticles().then((fetchedArticles) => {
      setArticles(fetchedArticles);
    });
  }, []);
  return (
    <>
      <h1>Articles</h1>
      <div className='articles'>
        {articles.map((article) => {
          return (
            <div className='article' key={article.article_id}>
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
                <Link to={'/articles/' + article.article_id}>Read more...</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
