import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from './Articles';
import Home from './Home';
import SingleArticle from './SingleArticle';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
      </Routes>
    </main>
  );
}
