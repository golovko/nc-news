import React from 'react';
import ArticleCard from './ArticleCard';

export default function LatestArticles() {
  return (
    <div className='articles-list-header'>
      <div className='articles-list-title'>
        <h2>Latest</h2>
      </div>
      <ArticleCard />
    </div>
  );
}
