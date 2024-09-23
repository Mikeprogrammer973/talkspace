
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends NextAuthUser {
    id: string;
    email: string;
    name?: string;
    username: string;
    verified: boolean;
  }
  
  interface Session {
    user: User;
    accessToken?: string;
  }
}