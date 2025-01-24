import { NextResponse } from 'next/server'
 
export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set('X-Current-URL', request.url);


  return response;
}

// function checkAdminAuth(request) {
//   const token = request.cookies.get('adminAuthToken');
//   return token && token === 'validAdminToken'; // Replace with your actual validation logic
// }



export const config = {
    matcher: [
      '/', // Match the root path
      '/((?!api|_next|static|favicon.ico).*)', // Exclude /api, /_next, /static, and /favicon.ico
    ],
};  