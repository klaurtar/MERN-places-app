import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'ryan',
      image: 'https://ryantalbert.com/Images/ryanweb.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
