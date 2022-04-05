import { createContext, useState } from "react";

export const authContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const initializeToken = localStorage.getItem("token");
  const [token, setToken] = useState(initializeToken);
  const userLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    const remainingTime = expirationTime - Date.now();
    setTimeout(loginHandler, remainingTime);
  };
  const authValue = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};
export default AuthProvider;
