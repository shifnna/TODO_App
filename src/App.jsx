import React from 'react';
import './App.css'
import Todo from './components/Todoapp/Todo'
import Counter from './components/Counter/Counter';
function App() {
  return (
    <div className='App'>
      <Todo />
      <Counter />
    </div>
  );
}

export default App;
