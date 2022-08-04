import { NextResponse } from 'next/server'
import nookies from 'nookies'

// https://vercel.com/docs/concepts/functions/edge-functions/middleware-api

export default function middleware(req) {
  // const { nookiesToken } = nookies.get(req)
  // const nookiesToken = nookies.get(null, 'token');
  // console.log("REQ", req)
  // console.log("REQ COOKIES", req.cookies)
  const { token } = req.cookies
  const { username } = req.cookies
  // console.log("NOOKIES TOKEN", nookiesToken)
  // console.log("USERNAME", username)
  
  const url = req.nextUrl.clone()
  // console.log("Request to Page : ", url.pathname)
  // console.log("Token : ", token)
  url.pathname = '/login'
  // console.log(url.pathname)

  if (!token) {
    return NextResponse.redirect(url)
    // return NextResponse.rewrite(url)
  }
}

// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(req: NextRequest) {
//   // 🌐 set relative-url
//   const url = req.nextUrl.clone();

//   // 🍪 get cookie
//   const isLogin = JSON.parse(req.cookies['isLogin'] || 'false');

//   // ⬅️ navigate from all pages to login page when unauthenticated
//   if (url.pathname !== '/' && !isLogin) {
//     url.pathname = '/';
//     return NextResponse.redirect(url);
//   }

//   // ➡️ navigate from login page to dashboard page when authenticated
//   if (url.pathname === '/' && isLogin) {
//     url.pathname = '/dashboard';
//     return NextResponse.redirect(url);
//   }
// }