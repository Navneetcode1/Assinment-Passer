import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './UserDetail.css'; 

const UserDetail = () => {
  const { userId } = useParams();
  const users = useSelector(state => state.users.users);
  const user = users.find(user => user.id === parseInt(userId));

  return (
    <div className="user-detail">
      {user ? (
        <>
          <h1>{user.username}</h1>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <Link to={`/edit/${user.id}`}>Edit</Link>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserDetail;
