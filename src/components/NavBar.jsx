import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getTopics } from '../../utils/api';
import User from './User';

export default function NavBar() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
    });
  }, []);

  return (
    <nav>
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
    </nav>
  );
}
