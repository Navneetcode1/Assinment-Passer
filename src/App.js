import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './Components/UserList';
import UserDetail from './Components/UserDetail';
import UserForm from './Components/UserForm';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {
  return (
    <Provider store={store}>
      
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/edit/:userId" element={<UserForm />} />
          <Route path="/create" element={<UserForm />} />
        </Routes>
     
    </Provider>
  );
};

export default App;
