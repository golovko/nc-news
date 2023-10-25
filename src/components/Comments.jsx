import React, { useState, useEffect, useContext } from 'react';
import { deleteComment, getComments, updateComment } from '../../utils/api';
import Vote from './Vote';
import PostComment from './PostComment';
import { UserContext } from '../contexts/UserContext';

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);
  const { user } = useContext(UserContext);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setIsLoading(false);
        setIsError(null);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const deleteHandler = (comment_id) => {
    setIsLoading(true);
    deleteComment(comment_id)
      .then((res) => {
        setIsDeleted(true);
        setIsLoading(false);
        setTimeout(() => {
          setIsDeleted(false);
        }, 3000);
        setIsError(null);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };

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
              <Vote
                id={comment.comment_id}
                type='star'
                votes={comment.votes}
                update={updateComment}
              />
              <p>by {' ' + comment.author}</p>
              <p>posted {' ' + new Date(comment.created_at).toDateString()}</p>
              <button
                onClick={() => deleteHandler(comment.comment_id)}
                className='del-button'
                disabled={isLoading || user.username !== comment.author}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
      {isDeleted ? (
        <div className='alert deleted'>
          <span
            className='closebtn'
            onClick={() => {
              setIsError(null);
            }}>
            &times;
          </span>
          Comment successfully deleted.
        </div>
      ) : null}
      <PostComment article_id={article_id} setComments={setComments} />
    </>
  );
}
