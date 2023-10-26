import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function User() {
  const { user } = useContext(UserContext);

  return (
    <div className='username'>
      <img src={user.avatar_url} />
      <p>{user.name}</p>
    </div>
  );
}
