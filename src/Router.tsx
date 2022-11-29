import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './page/Signup';
// import Login from './components/login';
// import Main from './components/main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
