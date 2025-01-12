// src/components/Dashboard/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6 sm:px-10">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome to Your Dashboard!
          </h2>
          <p className="mt-2 text-gray-600">
            You have successfully logged in.
          </p>
        </div>
        
        <div className="mt-6 space-y-4">
          <Link
            to="/"
            className="w-full text-center block py-2 px-4 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition duration-200"
          >
            Go to Home
          </Link>
          
          <Link
            to="/profile"
            className="w-full text-center block py-2 px-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition duration-200"
          >
            View Profile
          </Link>
          
          <Link
            to="/settings"
            className="w-full text-center block py-2 px-4 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition duration-200"
          >
            Settings
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Not you?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Log out
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
