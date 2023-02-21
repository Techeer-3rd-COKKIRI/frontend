import { Suspense } from 'react';
import './App.css';
import Router from './Router';
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
