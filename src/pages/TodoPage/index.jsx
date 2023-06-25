import React, { Component } from 'react';
import Container from '../../components/Container';
import TODOS from '../../mock/todos';
import TodoItem from '../../components/TodoItem';

class TodoPage extends Component {
  state = {
    todos: TODOS,
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

  render() {
    return (
      <div>
        <section>
          <Container>
            <h2>TodoPage</h2>
            <div style={{ marginTop: 20 }}>
              {this.state.todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  handleClick={this.handleTodoItemClick}
                />
              ))}
            </div>
          </Container>
        </section>
      </div>
    );
  }
}

export default TodoPage;
