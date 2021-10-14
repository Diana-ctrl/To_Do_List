import React from 'react';
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <div className='App'>
      <TodoList title='What to learn?' />
      <TodoList title='Movies' />
      <input type='checkbox' />
      <input type='date' />
      <input type='it-incubator' />
      <TodoList title= 'Books'/>
    </div>
  );
}

export default App;
