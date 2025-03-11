import React, { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке пользователей:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Загрузка пользователей...</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-center">Список пользователей</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
