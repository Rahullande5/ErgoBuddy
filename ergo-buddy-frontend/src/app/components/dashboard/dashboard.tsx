"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../header/header';
import Footer from '../footer/footer';

const DashboardComponent: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = async () => {
      try {
        // Simulate a call to the server to fetch user data
        const response = await new Promise((resolve) => 
          setTimeout(() => resolve({ data: { name: "John Doe", email: "johndoe@example.com", role: "Admin" } }), 1000)
        );

        setUserData((response as any).data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        router.push('/login'); // Redirect to login if fetching fails
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {/* Include Header */}
      <Header />

      {/* Main content for the dashboard */}
      <main className="container mx-auto mt-16 mb-16 p-4">
        <h1 className="text-3xl font-bold mb-4 md-center">Welcome to Your Dashboard, {userData?.name}!</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-lg">Name: {userData?.name}</p>
          <p className="text-lg">Email: {userData?.email}</p>
          <p className="text-lg">Role: {userData?.role}</p>
        </div>
        {/* Add more dashboard components or sections here */}
      </main>

      {/* Include Footer */}
      <Footer />
    </>
  );
};

export default DashboardComponent;
