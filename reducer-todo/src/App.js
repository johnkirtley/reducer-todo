import React, { useReducer } from 'react';
import { ReducerList, initialState } from './reducers/todoReducer';
import ToDo from './components/todo';
import TodoPage from './components/todoPage';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(ReducerList, initialState);

  return (
    <div className="App">
      <h1>To-Do App</h1>

      <ToDo state={state} dispatch={dispatch} />
      <TodoPage state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
