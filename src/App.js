import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import SignUpPage from './SignUpArea/SignUpPage';
import Success from './Success';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path="/LoginPage" exact={true} element={<LoginPage />} />
          <Route path='/SignUpPage' element={<SignUpPage />} />
          <Route path='/Success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

