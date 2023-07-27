import './App.css';

// App.js
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import UserDetails from './pages/UserDetails';


const App = () => {
  return (

      <div>
        <AppHeader />
        <Routes>
          <Route path="/user/:username" element={<UserDetails />} />
        </Routes>
      </div>
  );
};

export default App;