import jwt from "jsonwebtoken";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  async function getToken() {
    const token = localStorage.getItem("next-jwt-auth-token");
    if (token) {
      const decoded = jwt.decode(token);
      setUsername(decoded.username);
      setToken(token);
    }
  }

  useEffect(() => {
    getToken();
  }, []);

  return (
    <UserContext.Provider
      value={{ username, setUsername, token, setToken }}
    >
      {children}
    </UserContext.Provider>
  );
};