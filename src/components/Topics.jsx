import React, { useState, useEffect } from 'react';
import { getTopics } from '../../utils/api';
import { Link, useParams } from 'react-router-dom';

export default function Topics() {
  const { topic } = useParams();
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((fetchedTopics) => {
      setTopics(fetchedTopics);
    });
  }, []);

  return (
    <div className='topics-container'>
      <ul className='topics'>
        {topics.map((currentTopic) => {
          let classTag = 'tag ' + currentTopic.slug;
          classTag += topic === currentTopic.slug ? ' active-tag' : '';
          return (
            <li className={classTag} key={currentTopic.slug}>
              <Link to={'/articles/topics/' + currentTopic.slug}>
                <h2>{currentTopic.slug}</h2>
                <p>{currentTopic.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
