import React, { useState } from 'react';

export const AuthContext = React.createContext({
  token: '',
  isAuth: false,
  login: (token: any) => {},
  logout: () => {}
});

const calculateRemainingTime = (expirationTime: any) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  return adjExpirationTime - currentTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 3600) {
    localStorage.removieItem('token');
    localStorage.removeItem('expirationDate');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime
  };
};

const AuthContextProvider: React.FC = (props) => {
  const initialToken = localStorage.getItem('token');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [token, setToken] = useState<string | (() => string) | null>(
    initialToken
  );
  const logoutHandler = () => {
    setIsAuthenticated(false);
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginHandler = (token: any, expirationTime: any) => {
    setIsAuthenticated(true);
    setToken(token);
    localStorage.setItem('token', token);

    localStorage.setItem('remainingTime', remainingTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    setTimeout(logoutHandler, remainingTime);
  };

  return (
    <AuthContext.Provider
      value={{
        login: loginHandler,
        logout: logoutHandler,
        token: token,
        isAuth: isAuthenticated
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
