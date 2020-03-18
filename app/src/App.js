import React from 'react';
// Styles
import './App.css';
// Components
import Beaches from './components/Beaches';
import Alerts from './components/Alerts';

function App() {
  return (
    <div className="App">
      <h1>Hawaii Ocean Safety</h1>
      <Alerts />
      <Beaches />
    </div>
  );
}

export default App;
