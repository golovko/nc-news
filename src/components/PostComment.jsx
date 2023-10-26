import React, { useState, useContext } from 'react';
import { postComment } from '../../utils/api';
import { UserContext } from '../contexts/UserContext';

export default function PostComment({ article_id, setComments }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [isError, setIsError] = useState(null);
  const [comment, setComment] = useState('');
  const { user } = useContext(UserContext);

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const saveComment = (e) => {
    e.preventDefault();
    setIsLoading(true);
    postComment(article_id, {
      username: user.username,
      body: comment,
    })
      .then((response) => {
        if (response.status === 201) {
          setComments((val) => [...val, response.data]);
          setComment('');
          setIsLoading(false);
          setIsPosted(true);
          setTimeout(() => {
            setIsPosted(false);
          }, 3000);
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
        {isPosted ? (
          <div className='alert green'>
            <span
              className='closebtn'
              onClick={() => {
                setIsError(null);
              }}>
              &times;
            </span>
            Comment successfully posted.
          </div>
        ) : null}
      </div>
    </>
  );
}
