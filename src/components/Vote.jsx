import React, { useState } from 'react';

export default function Vote({ id, type, votes, update }) {
  const [userVotes, setUserVotes] = useState(0);
  const [isError, setIsError] = useState(null);
  const updateVotes = (value) => {
    setUserVotes((currentLikes) => {
      return currentLikes + value;
    });
    update(id, value).catch(() => {
      setUserVotes(0);
      setIsError(true);
    });
  };
  return (
    <div>
      <p>
        <i className={'fas fa-' + type}></i> {votes + userVotes}
      </p>
      <button
        disabled={userVotes === 1}
        aria-label='like'
        onClick={() => {
          updateVotes(1);
        }}>
        +
      </button>
      <button
        disabled={userVotes === -1}
        aria-label='dislike'
        onClick={() => {
          updateVotes(-1);
        }}>
        -
      </button>
      {isError ? (
        <div className='alert'>
          <span
            className='closebtn'
            onClick={() => {
              setIsError(null);
            }}>
            &times;
          </span>
          Something went wrong. Please try again.
        </div>
      ) : null}
    </div>
  );
}
