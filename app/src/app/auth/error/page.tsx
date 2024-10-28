"use client"

import { useRouter } from "next/navigation";

export default function ErrorPage({ searchParams }: { searchParams: { error: string } }) {
    const errorMessage = searchParams.error === "CredentialsSignin" ? "Invalid credentials!" : searchParams.error;
    const router = useRouter()
  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center max-w-md p-6 bg-gray-950 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Authentication Failed</h1>
          <p className="text-gray-200 text-lg mb-6">
            {errorMessage ? errorMessage : "We were unable to verify your identity. Please try again or contact support if the issue persists."}
          </p>
          <button onClick={()=>router.back()} className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700">
            Try Again
          </button>
          <p className="text-gray-500 text-sm mt-6">
            Need help? <a href="/support" className="text-indigo-600 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    );
}
  