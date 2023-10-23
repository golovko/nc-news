import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from './Articles';
import Home from './Home';

export default function Main() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </>
  );
}
