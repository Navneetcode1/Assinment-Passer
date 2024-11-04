import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext'; // Adjust the path as necessary

const Home = () => {
  const { state, dispatch } = useContext(UserContext);

  // Check if state is defined before trying to access users
  if (!state) {
    return <div>Loading...</div>; // or handle the error accordingly
  }

  return (
    <div>
      <h1>User Management Dashboard</h1>
      <ul>
        {state.users.map(user => (
          <li key={user.id}>
            {user.username} - {user.email} - {user.role}
            {/* You can add buttons here for editing or deleting */}
          </li>
        ))}
      </ul>
      {/* Add your modal or form components here */}
    </div>
  );
};

export default Home;
