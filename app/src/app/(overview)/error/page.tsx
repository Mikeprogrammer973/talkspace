"use client"
import { useRouter } from "next/navigation";
import { Button } from "tspace/app/ui/global/button";

export default function ErrorPage({ searchParams }: { searchParams: { error: string } }) {
    const errorMessage = searchParams.error
    const router = useRouter()  
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center max-w-md p-6 bg-gray-950 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Error</h1>
          <p className="text-gray-300 text-lg mb-6">
            {errorMessage ? errorMessage : "We were unable to verify your identity. Please try again or contact support if the issue persists."}
          </p>
          <p className="flex items-center justify-center"><Button onClick={()=>router.back()}>Try Again</Button></p>
          <p className="text-gray-500 text-sm mt-6">
            Need help? <a href="/support" className="text-indigo-600 hover:underline">Contact Support</a>
          </p>
        </div>
      </div>
    );
}
  