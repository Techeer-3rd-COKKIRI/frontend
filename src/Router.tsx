import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateStudy from './page/createStudy';
import MainPage from './page/main';
import SignUp from './page/signup';
import LogIn from './page/login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/createStudy" element={<CreateStudy />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
