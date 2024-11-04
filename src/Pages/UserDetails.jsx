import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserDetail from '../Components/UserDetail';
import EditUserModal from '../Components/EditUserModal';

const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector(state => state.users.find(u => u.id === parseInt(id)));
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      <UserDetail user={user} onEdit={handleEdit} />
      {isEditing && <EditUserModal user={user} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default UserDetails;
