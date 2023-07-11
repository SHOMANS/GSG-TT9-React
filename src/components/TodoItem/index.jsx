import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const TodoItem = ({ todo }) => {
  return (
    <div className={`todo__item ${todo.completed ? 'completed__todo' : ''}`}>
      <Link to={`${todo.id}`}>
        <h3>{todo.completed ? <del>{todo.title}</del> : todo.title}</h3>
      </Link>
    </div>
  );
};

export default TodoItem;
