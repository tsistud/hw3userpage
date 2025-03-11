import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Страница не найдена</p>
      <Link
        to="/users"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
