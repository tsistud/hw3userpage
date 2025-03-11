import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-50 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/users" className="text-2xl font-semibold text-blue-700">
          Dair Isakov
        </Link>
        <nav>
          <Link to="/users" className="text-gray-800 hover:text-blue-500">
            List of Users
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
