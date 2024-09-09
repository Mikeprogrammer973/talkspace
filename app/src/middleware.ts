
import NextAuth from 'next-auth';
import { authConfig } from './app/lib/user/auth/config/auth.config';
 
export default NextAuth(authConfig).auth;

export const config = {
  matcher: '/:path*',
};
