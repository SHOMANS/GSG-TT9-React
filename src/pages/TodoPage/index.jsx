import React, { Component } from 'react';
import Container from '../../components/Container';
import TODOS from '../../mock/todos';
import TodoItem from '../../components/TodoItem';
import TodoForm from '../../components/TodoForm';

class TodoPage extends Component {
  state = {
    todos: TODOS,
    isTodoExist: false,
  };

  handleTodoItemClick = (itemId) => {
    this.setState((prevState) => {
      const _todos = prevState.todos.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });

      return {
        todos: _todos,
      };
    });
  };

  handleAddTodo = (todo) => {
    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  render() {
    if (true) {
      return (
        <div>
          <section>
            <button
              onClick={() =>
                this.setState((prevState) => ({
                  isTodoExist: !prevState.isTodoExist,
                }))
              }
            >
              click
            </button>

            <Container>
              <TodoForm onAddTodo={this.handleAddTodo} />
              <br />

              <h2>TodoPage</h2>
              <div style={{ marginTop: 20 }}>
                {this.state.isTodoExist ? (
                  this.state.todos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      handleClick={this.handleTodoItemClick}
                    />
                  ))
                ) : (
                  <h3>No todos</h3>
                )}
              </div>
            </Container>
          </section>
        </div>
      );
    } else {
      return (
        <div>
          <section>
            <Container>
              <h1>No todos</h1>
            </Container>
          </section>
        </div>
      );
    }
  }
}

export default TodoPage;
