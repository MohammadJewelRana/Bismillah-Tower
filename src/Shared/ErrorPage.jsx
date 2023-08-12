import React from 'react';
import error1 from  '../assets/error/errorPage.jpg';
 
// import error1 from '../assets/error1.jpg'
import { Link } from 'react-router-dom';
 


const ErrorPage = () => {

//   useTitle('Error Page');

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100  w-full">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-12">
        <img
          className="w-full h-auto"
          src={error1}
          alt="Error 404"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-3xl mb-2 text-red-400 text-center">Page not found</div>
          <p className="text-red-700">
            The page you are looking for does not exist.
          </p>
          <div className="mt-4">
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-700 underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
