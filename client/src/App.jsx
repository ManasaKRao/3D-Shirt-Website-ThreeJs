import React, { Suspense } from 'react';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas />
      </Suspense>

      <Customizer />
      <h1 className="head-text"></h1>
    </main>
  );
}

export default App;
