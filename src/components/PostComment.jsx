import React, { useState, useEffect } from 'react';
import { postComment } from '../../utils/api';
import { username } from '../App';

export default function PostComment({ article_id, setComments }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [comment, setComment] = useState('');

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const saveComment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    postComment(article_id, {
      username: username,
      body: comment,
    })
      .then((response) => {
        if (response.status === 201) {
          alert('Posted');
          setComments((val) => [...val, response.data]);
          setComment('');
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <>
      <h2>Post a comment</h2>
      <div className='post-comment'>
        <form onSubmit={saveComment}>
          {isLoading ? <div className='loader'></div> : null}
          <label htmlFor='comment-text'>Write your comment here:</label>
          <textarea
            id='comment-text'
            onChange={onChangeHandler}
            value={comment}
            name='newComment'
            rows='5'
          />
          <button disabled={!comment || isLoading}>Post comment</button>
        </form>
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
    </>
  );
}
