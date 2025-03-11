import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/users" className="text-2xl font-bold text-blue-600">
          Nosov Nikita
        </Link>
        <nav>
          <Link to="/users" className="text-gray-700 hover:text-blue-600">
            Список пользователей
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
