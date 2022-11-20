import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Main from './components/main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
