import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SignUp = lazy(() => import('./page/Signup'));
const CreateStudy = lazy(() => import('./page/createStudy'));
const MainPage = lazy(() => import('./page/main'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/sign" element={<SignUp></SignUp>}></Route>
        <Route path="/createStudy" element={<CreateStudy />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
