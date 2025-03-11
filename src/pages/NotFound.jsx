import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link
        to="/users"
        className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
      >
        Go back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
