import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { getUser } from '../../utils/api';

export default function User() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const userHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    getUser(username)
      .then((fetchedUser) => {
        setUser(fetchedUser);
        setIsLoading(false);
        setUsername('');
      })
      .catch((err) => {
        alert('Username not found');
        setIsLoading(false);
      });
  };

  return isLoading ? (
    <div className='loader'></div>
  ) : user.username ? (
    <div className='username'>
      <img src={user.avatar_url} />
      <p>{user.name}</p>
      <div>
        <button onClick={() => setUser('')} to='#'>
          Logout
        </button>
      </div>
    </div>
  ) : (
    <div className='username'>
      <form onSubmit={userHandler}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button className='login-button' type='submit' disabled={isLoading}>
            Login
          </button>
        </label>
      </form>
    </div>
  );
}
