import React, { useState, useEffect } from 'react';
import { getTopics } from '../../utils/api';
import { Link } from 'react-router-dom';

export default function Topics() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
    });
  }, []);

  return (
    <div className='topics-container'>
      <ul className='topics'>
        {topics.map((topic) => {
          return (
            <li className={'tag ' + topic.slug} key={topic.slug}>
              <Link to={'/articles/topics/' + topic.slug}>
                <h3>{topic.slug}</h3>

                <p>{topic.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
