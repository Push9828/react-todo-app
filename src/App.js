import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilterTodos(todos.filter((todo) => todo.completed === true));
          break;

        case 'uncompleted':
          setFilterTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };
    filterHandler();

    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    };
    saveLocalTodos();
  }, [todos, status]);

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filterTodos={filterTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
