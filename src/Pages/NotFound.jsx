import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 text-gray-900 px-4">
      <AlertCircle size={80} className="text-red-500 mb-6 animate-bounce" />
      
      <h1 className="text-6xl md:text-7xl font-extrabold mb-4 text-red-600 animate-pulse">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
        Oops! Page Not Found
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved. Let's get you back home.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
