import React from 'react';
import Articles from './Articles';
import Topics from './Topics';
import ArticleCard from './ArticleCard';

export default function Home() {
  return (
    <>
      <h1>Welcome to NC News portal!</h1>
      <section>
        <h2>Latest articles</h2>
        <Articles page='1' limit='3' sortBy='created_at' order='asc' />
      </section>
      <section>
        <h2>Topics</h2>
        <Topics />
      </section>
      <section>
        <h2>Advertisement</h2>
        <figure className='banner'>
          <img src='banner.jpg' />
        </figure>
      </section>
    </>
  );
}
