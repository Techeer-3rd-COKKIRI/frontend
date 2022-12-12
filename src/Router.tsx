import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateStudy from './page/createStudy';
import MainPage from './page/main';
import SignUp from './page/Signup';
import StudyMain from './page/studyMain';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/sign" element={<SignUp></SignUp>}></Route>
        <Route path="/createStudy" element={<CreateStudy />}></Route>
        <Route path="/studyMain" element={<StudyMain></StudyMain>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
