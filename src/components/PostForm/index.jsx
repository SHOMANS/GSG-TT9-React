import React, { Component } from 'react';

const inputsArray = [
  {
    id: 'title',
    name: 'title',
    type: 'text',
    label: 'Title',
  },
  {
    id: 'author',
    name: 'author',
    type: 'text',
    label: 'author',
  },
];

class PostForm extends Component {
  state = {
    title: '',
    author: '',
    isGetFirstTimeData: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: this.state.title,
      author: this.state.author,
    };

    this.props.handleSubmit(data);
  };

  static getDerivedStateFromProps(props, state) {
    if (props.post && state.isGetFirstTimeData) {
      return {
        title: props.post.title,
        author: props.post.author,
        isGetFirstTimeData: false,
      };
    }
    return null;
  }

  handleChangeInput = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });

    // if (name === 'title') this.setState({ title: value });
    // else this.setState({ body: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {inputsArray.map((input) => (
          <div key={input.id}>
            <label htmlFor={input.id}>{input.label}</label>

            <input
              type={input.type}
              id={input.id}
              name={input.name}
              value={this.state[input.id]}
              onChange={this.handleChangeInput}
              style={{
                padding: 10,
                width: 300,
              }}
            />
          </div>
        ))}

        <button type='submit'>
          {this.props.isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    );
  }
}

export default PostForm;
