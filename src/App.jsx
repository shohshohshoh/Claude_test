import React from 'react';
import './App.css';
import TaskBoard from './components/TaskBoard';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>📋 タスクボード</h1>
      </header>
      <main>
        <TaskBoard />
      </main>
    </div>
  );
}

export default App;
