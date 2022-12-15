import { Suspense, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Router from './Router';
import './App.css';

function App() {
  return (
    <Suspense fallback={'loading...'}>
      <div className="App">
        <Router></Router>
      </div>
    </Suspense>
  );
}

export default App;
