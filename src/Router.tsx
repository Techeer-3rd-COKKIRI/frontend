import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const SignUp = lazy(() => import('./page/signup'));
const CreateStudy = lazy(() => import('./page/createStudy'));
const MainPage = lazy(() => import('./page/main'));
const LogIn = lazy(() => import('./page/logIn'));
const Profile = lazy(() => import('./page/profile'));
const StudyMain = lazy(() => import('./page/studyMain'));

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/Signup" element={<SignUp></SignUp>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/createStudy" element={<CreateStudy />}></Route>
        <Route path="/studyMain/:id" element={<StudyMain></StudyMain>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
