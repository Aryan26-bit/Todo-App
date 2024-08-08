import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoForm from './components/TodoForm';
import Tabs from './components/Tabs';
import './App.css';  

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>To-Do List</h1>
        <TodoForm />
        <Tabs />
      </div>
    </Provider>
  );
}

export default App;

