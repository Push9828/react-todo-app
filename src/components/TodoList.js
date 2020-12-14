import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodos.map((todo) => (
          <Todo
            key={todo.id}
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
