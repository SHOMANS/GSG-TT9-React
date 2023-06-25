import React from 'react';
import './style.css';

const TodoItem = ({ todo, handleClick }) => {
  return (
    <div
      className={`todo__item ${todo.completed ? 'completed__todo' : ''}`}
      // onClick={() => {
      //   console.log(todo.title);
      // }}
      onClick={() => handleClick(todo.id)}
    >
      <h3>{todo.completed ? <del>{todo.title}</del> : todo.title}</h3>
    </div>
  );
};

export default TodoItem;
