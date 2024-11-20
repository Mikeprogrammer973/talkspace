
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends NextAuthUser {
    id: string;
    email: string;
    username: string;
    image: string;
  }
  
  interface Session {
    user: User;
    accessToken?: string;
  }
}