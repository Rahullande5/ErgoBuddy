"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import ergonomicWorkplace from '../../images/ergonomicWorkplace.jpg'; // Adjust the path based on your project structure

// Import the Header and Footer components
import Header from '../header/header';
import Footer from '../footer/footer';

const AboutPageComponent = () => {
  const router = useRouter();

  return (
    <>
      {/* Include Header at the top */}
      <Header />

      {/* Main Content with Background Image and Overlay */}
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(${ergonomicWorkplace.src})`,
          backgroundSize: 'cover', // Cover the entire area
          backgroundPosition: 'center', // Center the background image
          minHeight: '86vh',
          minWidth:'210vh', // Adjust height as needed
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start', // Align content to the start of the container
          alignItems: 'flex-start', // Align content to the left
          textAlign: 'left', // Align text to the left
          padding: '20px',
          color: '#fff', // Text color to stand out against the background
          paddingLeft: '50px', // Adjust padding as needed
        }}
      >
        {/* Overlay for making text more visible */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
            zIndex: 1, // Ensure overlay appears above the background image
          }}
        />

        {/* Text Content */}
        <div style={{ position: 'relative', zIndex: 2, marginTop: '50px' }}> {/* Adjust marginTop to move text down */}
          <h6 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', marginBottom: '1rem' }}>
            Why Erogonomics?
          </h6>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '1rem' }}>
          Like how engineering principles influence the operation of machines, anatomical principles shape the way human bodies operate.
          </p>
          <h6 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', marginBottom: '1rem' }}>
           Understanding Ergonomics
          </h6>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '1rem'}}>
          "Ergonomics" is derived from two Greek words: "ergon," meaning work, and "nomoi," referring to natural laws.</p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '1rem'}}>
            Ergonomics is a practical science that designs and organizes items for human use to enhance efficiency and safety at work. 
          </p>
          <h6 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', marginBottom: '1rem' }}>
          Effects from poor Ergonomics
          </h6>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '1rem'}}>
          Poor ergonomics in the IT industry can lead to musculoskeletal disorders, such as back pain, carpal tunnel syndrome, and neck strain, reducing employee productivity and increasing absenteeism.</p>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '1rem'}}>
          Additionally, long-term exposure to uncomfortable work conditions may contribute to stress, fatigue, and chronic health issues, affecting overall well-being and job satisfaction.</p> 
          <h6 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2rem', marginBottom: '1rem' }}>
            Why ErogoBuddy?
          </h6>
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '1rem'}}>
          ErgoBuddy helps you maintain a healthy posture, reduce strain, and optimize your workspace for maximum comfort.
          Get regular reminders to adjust your posture, take breaks, and perform exercises tailored to your needs.
          </p>
        </div>
      </div>

      {/* Include Footer at the bottom */}
      <Footer />
    </>
  );
};

export default AboutPageComponent;
