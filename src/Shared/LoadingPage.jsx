import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <svg
          className="animate-spin h-12 w-12 text-black mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.86 3.182 8.009l1.414-1.414C2.56 16.808 1.5 14.641 1.5 12H6zm3.182-1.291l1.415 1.414A7.962 7.962 0 0112 20v-4c-2.641 0-4.808-1.06-6.364-2.808z"
          ></path>
        </svg>
        <p className="text-black">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
