import { useEffect, useContext } from "react";
import { UserContext } from "@utils/useUser";
import Router from "next/router";
import nookies from 'nookies'

export default function Logout() {
  const user = useContext(UserContext);

  useEffect(() => {
    user.setUsername("");
    user.setToken("");
    localStorage.removeItem("next-jwt-auth-token");
    nookies.destroy(null, 'token')
    nookies.destroy(null, 'username')
    Router.replace("/login");
  }, []);

  return ("")
}