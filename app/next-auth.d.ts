
import { DefaultSession, DefaultUser } from 'next-auth';

declare module 'next-auth' {
  interface User extends NextAuthUser {
    id: string;
    email: string;
    name?: string;
    username: string;
  }
  
  interface Session {
    user: User;
  }
}