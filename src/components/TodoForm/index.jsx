import React, { Component } from 'react';

class TodoForm extends Component {
  state = {
    title: 'Hello',
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
        <label htmlFor='title'>Todo Title</label>
        <input
          type='text'
          title='title'
          name='title'
          id='title'
          value={this.state.title}
          required
          onChange={this.handleChangeInput}
        />
        <button type='submit'>Add</button>
      </form>
    );
  }
}

export default TodoForm;
