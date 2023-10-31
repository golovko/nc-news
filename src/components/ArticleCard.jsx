import React from 'react';
import { Link } from 'react-router-dom';
import './article-card.css';

export default function ArticleCard({ articleObj }) {
  return (
    <div className='card-list'>
      <article className='card'>
        <div className={'tag ' + articleObj.topic}>{articleObj.topic}</div>
        <figure className='card-image'>
          <img
            src={articleObj.article_img_url}
            alt={articleObj.title + ' image'}
          />
        </figure>
        <div className='card-header'>
          <h3>
            <Link to={'/articles/' + articleObj.article_id}>
              {articleObj.title}
            </Link>
          </h3>
        </div>
        <div className='posted-by'>
          <p>By {articleObj.author}</p>
        </div>
        <div className='card-footer'>
          <div className='card-meta card-meta--votes'>
            <i className='fas fa-heart'></i>
            <p>{articleObj.votes}</p>
          </div>
          <div className='card-meta card-meta--comments'>
            <i className='fa-regular fa-comments'></i>
            <p>{articleObj.comment_count}</p>
          </div>
          <div className='card-meta card-meta--date'>
            <i className='fa-regular fa-calendar'></i>
            <p>{new Date(articleObj.created_at).toDateString()}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
