import React from 'react';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  return (
    <div className="bg-gray-50 p-5 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
      <img
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={`${user.name.firstname} ${user.name.lastname}`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="mt-4 text-xl font-medium text-center">
        {user.name.firstname} {user.name.lastname}
      </h2>
      <p className="text-center text-gray-700">{user.email}</p>
      <p className="text-center text-gray-700">
        {user.address.city}, {user.address.street}
      </p>
      <div className="mt-4 text-center">
        <Link
          to={`/users/${user.id}`}
          className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
