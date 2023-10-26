import React, { createContext, useEffect, useState } from 'react';
import { getUser } from '../../utils/api';
import { username } from '../App';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    getUser(username).then((fetchedUser) => setUser(fetchedUser));
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
