import React from 'react';
import './assets/css/App.css';
import HeaderMain from './components/HeaderMain';
import TechUsed from './components/TechUsed';
import WhatUpsyDo from './components/WhatUpsyDo';

function App() {
  return (

    <main className="app">

      <HeaderMain />
      <WhatUpsyDo />
      <TechUsed />

    </main>

  );
}

export default App;
