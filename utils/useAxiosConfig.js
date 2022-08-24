import { createContext } from "react";
import nookies from 'nookies';
import axios from 'axios';

export const AxiosConfigContext = createContext();

export const AxiosConfigProvider = ({ children }) => {
  const token = nookies.get(null, 'token');

  // // can be set up here, or in page file like in pages/data.js
  if (token.token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.token}`;
  } else {
    axios.defaults.headers.common['Authorization'] = "";
  }

  return (
    <AxiosConfigContext.Provider
      value={{ token }}
    >
      {children}
    </AxiosConfigContext.Provider>
  );
};