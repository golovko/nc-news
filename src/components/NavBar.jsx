import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getTopics } from '../../utils/api';
import ThemeMode from './ThemeMode';
import User from './User';
import './navbar.css';

export default function NavBar() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
    });
  }, []);

  return (
    <div className='wrapper'>
      <header className='primary-header'>
        <div className='container'>
          <Link to='/' className='home-link'>
            <img src='./logo.png' alt='NC News logo' />
          </Link>
          <div className='nav-wrapper'>
            <input
              type='checkbox'
              id='primary-toggle'
              aria-controls='primary-navigation'
              hidden
            />
            <label htmlFor='primary-toggle' className='primary-toggle'>
              <div className='line' aria-hidden='true'></div>
              <span className='visually-hidden'>Menu</span>
            </label>
            <nav className='primary-navigation' id='primary-navigation'>
              <ul className='nav-list' aria-label='Primary' role='list'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/topics'>Topics</Link>
                </li>
                <li>
                  <Link to='/articles'>Articles</Link>
                </li>
                <li>
                  <a>
                    <ThemeMode />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
{
  /* <nav>
      <ul className='navbar'>
        <li className='dropbtn'>
          <Link to='/'>Home</Link>
        </li>
        <li className='dropbtn'>
          <Link to='/topics'>Topics</Link>
        </li>
        <li className='dropbtn'>
          <Link to='/articles'>Articles</Link>
        </li>
      </ul>
      <ThemeMode />
    </nav> */
}
