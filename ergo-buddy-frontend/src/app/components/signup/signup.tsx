"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '../../services/apiServices';
import Image from 'next/image'; // Import the Image component from Next.js
import ergobuddy from '../../images/ergoBuddy_converted.jpg'; // Adjust the path based on your project structure

const SignUpComponent = () => {
  const [gpnID, setGpnID] = useState<number | string>(''); // Allow string to manage incomplete input
  const [ergoUserName, setErgoUserName] = useState<string>('');
  const [ergoUserEmail, setErgoUserEmail] = useState<string>('');
  const [ergoUserPassword, setErgoUserPassword] = useState<string>('');
  const [ergoUserDesignation, setErgoUserDesignation] = useState<string>('');
  const [isCustomized, setIsCustomized] = useState<boolean>(false);
  const [ergoUserLocation, setErgoUserLocation] = useState<string>('');
  const [error, setError] = useState<string | null>(null); // State to handle errors

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCustomized(false);

    // Validate the length of the GPN ID
    if (gpnID.toString().length !== 8) {
      setError('GPN ID must be exactly 8 digits long');
      return;
    }

    try {
      await createUser({
        gpnID: Number(gpnID),
        ergoUserName,
        ergoUserEmail,
        ergoUserPassword,
        ergoUserDesignation,
        isCustomized,
        ergoUserLocation,
      });
      router.push('/');
    } catch (error) {
      console.error(error);
      setError('Failed to create user, please try again.');
    }
  };

  return (
    <div className="border-4 border-gray-400 p-4 m-4 h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left side with image */}
        <div className="relative h-3/4">
          <div className="relative h-full">
            <Image
              src={ergobuddy}
              alt="Ergo Buddy"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right side with form */}
        <div className="flex flex-col justify-center p-8 bg-white">
          <div className="flex justify-center items-center mb-8">
            <h1 className="text-3xl font-bold">Create New Ergo User</h1>
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              value={gpnID}
              onChange={(e) => {
                const value = e.target.value;
                // Only allow numeric input and set state
                if (value.length <= 8) {
                  setGpnID(value);
                  setError(null); // Clear error when typing
                }
              }}
              placeholder="GPN ID"
              required
              className="p-2 border border-gray-300 rounded"
              inputMode="numeric"
              pattern="\d{8}" // Enforce exactly 8 digits
              onKeyDown={(e) => {
                if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-' || e.key === '.' || e.key === ',') {
                  e.preventDefault(); // Disable invalid characters
                }
              }}
            />
            <input
              type="text"
              value={ergoUserName}
              onChange={(e) => setErgoUserName(e.target.value)}
              placeholder="Ergo User Name"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              value={ergoUserEmail}
              onChange={(e) => setErgoUserEmail(e.target.value)}
              placeholder="Ergo Email"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="password"
              value={ergoUserPassword}
              onChange={(e) => setErgoUserPassword(e.target.value)}
              placeholder="Ergo Password"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={ergoUserDesignation}
              onChange={(e) => setErgoUserDesignation(e.target.value)}
              placeholder="Ergo User Designation"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              value={ergoUserLocation}
              onChange={(e) => setErgoUserLocation(e.target.value)}
              placeholder="Ergo User Location"
              required
              className="p-2 border border-gray-300 rounded"
            />
            <br />
            <div className="col-span-2">
              <button type="submit" className="p-2 w-full bg-blue-600 text-white rounded hover:bg-blue-700">
                Sign Up
              </button>
            </div>
            {error && <p className="col-span-2 text-red-500">{error}</p>} {/* Display error message */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
