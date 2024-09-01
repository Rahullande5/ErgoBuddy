"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createUser } from '../../services/apiServices';
import Image from 'next/image';
import ergobuddy from '../../images/ergoBuddy_converted.jpg';

// Import the Header and Footer components
import Header from '../header/header';
import Footer from '../footer/footer';

// Define the array of options for user designation
const designationOptions = [
  'Software Engineer',
  'Product Manager',
  'Data Scientist',
  'UX/UI Designer',
  'DevOps Engineer',
  'Project Manager',
  'QA Tester',
  'Business Analyst',
  'System Administrator',
  'Network Engineer',
  // Add more designations as needed
];

const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    gpnID: '' as number | string, 
    ergoUserName: '',
    ergoUserEmail: '',
    ergoUserPassword: '',
    ergoUserDesignation: '',
    isCustomized: false,
    ergoUserLocation: '',
    error: null as string | null,
    isLoading: false, 
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'isCustomized' ? e.target.checked : value,
      error: null, 
    }));
  };

  const validateForm = () => {
    if (formData.gpnID.toString().length !== 8) {
      setFormData((prevData) => ({
        ...prevData,
        error: 'GPN ID must be exactly 8 digits long',
      }));
      return false;
    }

    if (!formData.ergoUserName.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        error: 'Ergo User Name is required',
      }));
      return false;
    }

    if (!formData.ergoUserEmail.includes('@') || !formData.ergoUserEmail.includes('.')) {
      setFormData((prevData) => ({
        ...prevData,
        error: 'Invalid email address',
      }));
      return false;
    }

    if (formData.ergoUserPassword.length < 8) {
      setFormData((prevData) => ({
        ...prevData,
        error: 'Password must be at least 8 characters long',
      }));
      return false;
    }

    if (!formData.ergoUserDesignation.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        error: 'Ergo User Designation is required',
      }));
      return false;
    }

    if (!formData.ergoUserLocation.trim()) {
      setFormData((prevData) => ({
        ...prevData,
        error: 'Ergo User Location is required',
      }));
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setFormData((prevData) => ({ ...prevData, isLoading: true, isCustomized: false }));

    try {
      const responseData = await createUser({
        gpnID: Number(formData.gpnID),
        ergoUserName: formData.ergoUserName,
        ergoUserEmail: formData.ergoUserEmail,
        ergoUserPassword: formData.ergoUserPassword,
        ergoUserDesignation: formData.ergoUserDesignation,
        isCustomized: formData.isCustomized,
        ergoUserLocation: formData.ergoUserLocation,
      });

      if(responseData.data !== null){
        const queryString = new URLSearchParams(JSON.stringify(responseData.data)).toString();
        router.push(`/dashboard?${queryString}`);   
      }  
    } catch (error) {
      console.error(error);
      setFormData((prevData) => ({
        ...prevData,
        error: 'Failed to create user, please try again.',
        isLoading: false,
      }));
    } finally {
      setFormData((prevData) => ({ ...prevData, isLoading: false }));
    }
  };

  return (
    <>
      <Header />

      <div className="border-4 border-gray-400 p-4 m-4 h-[80vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="relative h-3/4">
            <div className="relative h-full">
              <Image
                src={ergobuddy}
                alt="An illustration depicting ergonomic practices"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center p-8 bg-white">
            <div className="flex justify-center items-center mb-8">
              <h1 className="text-3xl font-bold">Create New Ergo User</h1>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="gpnID"
                type="number"
                value={formData.gpnID}
                onChange={handleChange}
                placeholder="GPN ID"
                required
                className="p-2 border border-gray-300 rounded"
                inputMode="numeric"
                pattern="\d{8}"
                aria-label="GPN ID, must be 8 digits"
                onKeyDown={(e) => {
                  if (['e', 'E', '+', '-', '.', ','].includes(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <input
                name="ergoUserName"
                type="text"
                value={formData.ergoUserName}
                onChange={handleChange}
                placeholder="Ergo User Name"
                required
                className="p-2 border border-gray-300 rounded"
                aria-label="Ergo User Name"
              />
              <input
                name="ergoUserEmail"
                type="email"
                value={formData.ergoUserEmail}
                onChange={handleChange}
                placeholder="Ergo Email"
                required
                className="p-2 border border-gray-300 rounded"
                aria-label="Ergo User Email"
              />
              <input
                name="ergoUserPassword"
                type="password"
                value={formData.ergoUserPassword}
                onChange={handleChange}
                placeholder="Ergo Password"
                required
                className="p-2 border border-gray-300 rounded"
                aria-label="Ergo Password"
              />
              <select
                name="ergoUserDesignation"
                value={formData.ergoUserDesignation}
                onChange={handleChange}
                required
                className="p-2 border border-gray-300 rounded"
                aria-label="Ergo User Designation"
              >
                <option value="" disabled>
                  Select Designation
                </option>
                {designationOptions.map((designation) => (
                  <option key={designation} value={designation}>
                    {designation}
                  </option>
                ))}
              </select>
              <input
                name="ergoUserLocation"
                type="text"
                value={formData.ergoUserLocation}
                onChange={handleChange}
                placeholder="Ergo User Location"
                required
                className="p-2 border border-gray-300 rounded"
                aria-label="Ergo User Location"
              />
              <div className="col-span-2">
                <button
                  type="submit"
                  className={`p-2 w-full bg-blue-600 text-white rounded hover:bg-blue-700 ${formData.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={formData.isLoading}
                >
                  {formData.isLoading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
              {formData.error && <p className="col-span-2 text-red-500" aria-live="assertive">{formData.error}</p>}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUpComponent;
