'use client';
import { useState } from 'react';

export default function StrategySection() {
  return (
    <section className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent">
            ODC Implementation Strategy
          </h2> */}
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-600 bg-clip-text text-transparent">
            Our proven approach to establishing and managing your offshore development center
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <video 
            src="/Images/animated2.webm"
            width={900}
            height={900}
            className="rounded-xl shadow-xl object-cover max-w-full"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}