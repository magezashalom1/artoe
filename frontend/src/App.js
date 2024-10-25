import React from 'react';
import './App.css';
import SneakerList from './components/SneakerList'; // Import the SneakerList component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ArToe</h1>
        <SneakerList />  {/* Render SneakerList here */}
      </header>
    </div>
  );
}

export default App;
