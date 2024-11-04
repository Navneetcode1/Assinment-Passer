// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';

// const EditUserModal = ({ user, onClose }) => {
//   const dispatch = useDispatch();

//   const handleSubmit = (values) => {
//     const updatedUser = {
//       ...user,
//       ...values,
//     };
//     dispatch({ type: 'UPDATE_USER', payload: updatedUser });
//     onClose();
//   };

//   return (
//     <div className="modal">
//       <h2>Edit User</h2>
//       <Formik
//         initialValues={{ username: user.username, email: user.email, role: user.role }}
//         validationSchema={Yup.object({
//           email: Yup.string().email('Invalid email address').required('Required'),
//           username: Yup.string().required('Required'),
//         })}
//         onSubmit={handleSubmit}
//       >
//         <Form>
//           <div>
//             <label htmlFor="username">Username</label>
//             <Field name="username" />
//             <ErrorMessage name="username" component="div" />
//           </div>
//           <div>
//             <label htmlFor="email">Email</label>
//             <Field name="email" type="email" />
//             <ErrorMessage name="email" component="div" />
//           </div>
//           <div>
//             <label htmlFor="role">Role</label>
//             <Field name="role" as="select">
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </Field>
//           </div>
//           <button type="submit">Update User</button>
//           <button type="button" onClick={onClose}>Cancel</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default EditUserModal;
