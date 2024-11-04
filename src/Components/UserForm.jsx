import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addUser, updateUser } from '../Redux/userSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './UserForm.css';

const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const users = useSelector(state => state.users.users);
  const user = users.find(user => user.id === parseInt(userId));

  const isEditMode = !!user;

  const formik = useFormik({
    initialValues: {
      username: user ? user.username : '',
      email: user ? user.email : '',
      role: user ? user.role : 'user',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      username: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      if (isEditMode) {
        dispatch(updateUser({ id: user.id, updatedUser: values }));
      } else {
        dispatch(addUser({ id: Date.now(), ...values }));
      }
      navigate('/');
    },
  });

  useEffect(() => {
    if (isEditMode && !user) {
      navigate('/');
    }
  }, [isEditMode, user, navigate]);

  return (
    <form className="user-form" onSubmit={formik.handleSubmit}>
      <h1>{isEditMode ? 'Edit User' : 'Create User'}</h1>
      <div>
        <label>Username</label>
        <input
          type="text"
          {...formik.getFieldProps('username')}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error">{formik.errors.username}</div>
        ) : null}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div>
        <label>Role</label>
        <select {...formik.getFieldProps('role')}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">{isEditMode ? 'Update' : 'Create'} User</button>
    </form>
  );
};

export default UserForm;
