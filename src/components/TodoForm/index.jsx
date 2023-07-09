import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    title: 'Hello',
    errors: {
      userName: '',
    },
  };

  handleChangeInput = (e) => {
    if (e.target.value.length < 10) {
      this.setState({ title: e.target.value.toLowerCase() });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.title) {
      this.props.onAddTodo({
        id: `${Date.now()}`,
        title: this.state.title,
        completed: false,
      });
      this.setState({ title: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='userName'>Todo Title</label>
        <input
          type='text'
          title='userName'
          name='userName'
          id='userName'
          value={this.state.title}
          onChange={this.handleChangeInput}
          required
        />
        {this.state.errors.userName && (
          <span>{this.state.errors.userName}</span>
        )}
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default TodoForm;
