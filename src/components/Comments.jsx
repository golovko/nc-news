import React, { useState, useEffect } from 'react';
import { getComments } from '../../utils/api';
import { Link } from 'react-router-dom';

export default function Comments({ article_id }) {
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return isError ? (
    <p>Something went wrong</p>
  ) : isLoading ? (
    <div className='loader'></div>
  ) : !comments ? (
    <p> No comments. Yet...</p>
  ) : (
    <>
      <h2>Comments</h2>
      <ul className='comments'>
        {comments.map((comment) => {
          return (
            <li className='comment' key={comment.comment_id}>
              <p>{comment.body}</p>
              <i className='fa-regular fa-star'>{comment.votes}</i>
              <p>by {' ' + comment.author}</p>
              <p>posted {' ' + new Date(comment.created_at).toDateString()}</p>
              <button>❌</button>
            </li>
          );
        })}
      </ul>
      <div>
        <form>
          <label>
            <textarea name='newComment' rows='5' cols='33' />
          </label>
          <button>Post comment</button>
        </form>
      </div>
    </>
  );
}
