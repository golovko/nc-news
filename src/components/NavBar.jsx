import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <a href='#news'>News</a>
      <div className='dropdown'>
        <a href='#' className='dropbtn'>
          Articles
          <i className='fa fa-caret-down'></i>
        </a>
        <div className='dropdown-content'>
          <Link to='/articles' className='dropbtn'>
            All articles <i className='fa fa-caret-down'></i>
          </Link>
          <a href='#'>Topic 1</a>
          <a href='#'>Topic 2</a>
          <a href='#'>Topic 3</a>
        </div>
      </div>
    </div>
  );
}
