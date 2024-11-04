import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../Redux/userSlice';
import { Link } from 'react-router-dom';
import './UserList.css'; 

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);
  const [currentPage, setCurrentPage] = React.useState(1);
  const usersPerPage = 10;

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      dispatch(deleteUser(id));
    }
  };

  const totalPages = Math.ceil(users.length / usersPerPage);
  const currentUsers = users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <Link to="/create">
        <button className="button">Create User</button>
      </Link>
      <ul className="user-list">
        {currentUsers.map(user => (
          <li key={user.id} className="user-list-item">
            <Link to={`/users/${user.id}`}>{user.username}</Link> - {user.email} - {user.role}
            <div>
              <Link to={`/edit/${user.id}`}>
                <button className="button">Edit</button>
              </Link>
              <button className="button" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}>Next</button>
      </div>
    </div>
  );
};

export default UserList;
