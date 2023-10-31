import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from './Articles';
import Home from './Home';
import SingleArticle from './SingleArticle';
import Topics from './Topics';
import Selector from './Selector';
import NonExistentPath from './errors/NonExistentPath';

export default function Main() {
  const [order, setOrder] = useState('asc');
  const [sortBy, setSortBy] = useState('created_at');

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/articles'
          element={
            <>
              <Topics />
              <Selector
                order={order}
                sortBy={sortBy}
                setOrder={setOrder}
                setSortBy={setSortBy}
              />
              <Articles order={order} sortBy={sortBy} />
            </>
          }
        />
        <Route
          path='/articles/topics/:topic'
          element={
            <>
              <Topics />
              <Selector
                order={order}
                sortBy={sortBy}
                setOrder={setOrder}
                setSortBy={setSortBy}
              />
              <Articles order={order} sortBy={sortBy} />
            </>
          }
        />
        <Route
          path='/articles/*'
          element={
            <>
              <Topics />
              <Selector
                order={order}
                sortBy={sortBy}
                setOrder={setOrder}
                setSortBy={setSortBy}
              />
              <Articles order={order} sortBy={sortBy} />
            </>
          }
        />
        <Route path='/articles/:article_id' element={<SingleArticle />} />
        <Route
          path='/topics'
          element={
            <>
              <div className='divider'></div>
              <Topics />
              <div className='divider'></div>
            </>
          }
        />
        <Route path='*' element={<NonExistentPath />} />
      </Routes>
    </main>
  );
}
