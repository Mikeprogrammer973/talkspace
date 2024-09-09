"use server"
import { getServerSession } from 'next-auth/next';
import { authConfig as authOptions } from 'tspace/app/lib/user/auth/config/auth.config';

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    return <p>You are not logged in</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user?.email}</h1>
    </div>
  );
}
