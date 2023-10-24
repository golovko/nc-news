import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { getTopics } from '../../utils/api';

export default function NavBar() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
    });
  }, []);

  return (
    <nav>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/topics'>Topics</Link>
        <div className='dropdown'>
          <a href='#' className='dropbtn'>
            Articles
            <i className='fa fa-caret-down'></i>
          </a>
          <div className='dropdown-content'>
            <Link to='/articles' className='dropbtn'>
              All articles <i className='fa fa-caret-down'></i>
            </Link>
            {topics.map((topic) => {
              return (
                <Link to={'/articles/topics/' + topic.slug} key={topic.slug}>
                  {topic.slug}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
