import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
