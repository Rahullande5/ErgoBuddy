import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to ErgoBuddy Application!</h1>
      
      <div className="flex space-x-4">
        <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up
        </Link>
        <Link href="/signin" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Sign In
        </Link>
      </div>
    </main>
  );
}
