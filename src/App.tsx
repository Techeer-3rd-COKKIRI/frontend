import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Router from './Router';
import './App.css';
import FallbackLoading from './components/fallbackLoading';

function App() {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <div className="App">
        <Router></Router>
      </div>
    </Suspense>
  );
}

export default App;
