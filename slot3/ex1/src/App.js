import './App.css';
import ListPerson from './Componemts/ListPerson';
import React from 'react';
import Hello from './Componemts/Hello'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Components Demo</h1>
        <Hello />
        <h2>List of People:</h2>
        <ListPerson />
      </header>
    </div>
  );
}

export default App;
