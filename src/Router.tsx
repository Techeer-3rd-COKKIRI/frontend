import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SignUp = lazy(() => import('./page/Signup'));
const CreateStudy = lazy(() => import('./page/createStudy'));
const MainPage = lazy(() => import('./page/main'));
const LogIn = lazy(() => import('./page/LogIn'));
const StudyMain = lazy(() => import('./page/studyMain'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/createStudy" element={<CreateStudy />}></Route>
        <Route path="/studyMain" element={<StudyMain></StudyMain>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
