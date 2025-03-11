import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке пользователя:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Загрузка информации о пользователе...</p>;
  }

  if (!user) {
    return <p>Пользователь не найден</p>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        {user.name.firstname} {user.name.lastname}
      </h1>
      <p className="mb-2"><strong>Email:</strong> {user.email}</p>
      <p className="mb-2"><strong>Телефон:</strong> {user.phone}</p>
      <div className="mb-2">
        <strong>Адрес:</strong>
        <p>
          {user.address.street}, {user.address.number}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
      <div className="mb-2">
        <strong>Геолокация:</strong>
        <p>
          Широта: {user.address.geolocation.lat}, Долгота: {user.address.geolocation.long}
        </p>
      </div>
      <div className="mb-2">
        <strong>Username:</strong> {user.username}
      </div>
      <div className="mb-4">
        <strong>Пароль:</strong>{" "}
        {showPassword ? user.password : "••••••••"}
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="ml-2 text-blue-600 hover:underline"
        >
          {showPassword ? "Скрыть" : "Показать"}
        </button>
      </div>
      <Link
        to="/users"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Назад к списку пользователей
      </Link>
    </div>
  );
}

export default UserDetail;
