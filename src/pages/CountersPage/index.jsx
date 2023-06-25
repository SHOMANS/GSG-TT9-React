import React, { Component } from 'react';
import Container from '../../components/Container';

class CountersPage extends Component {
  state = {
    counter: 0,
  };

  handleIncrease = () => {
    console.log('increasing');
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  handleDecrease = () => {
    console.log('decreasing');
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    // let counter = 0; // wrong logic

    return (
      <Container>
        <div>
          <button onClick={this.handleDecrease}>-</button>
          <span>{this.state.counter}</span>
          <button onClick={this.handleIncrease}>+</button>
        </div>
      </Container>
    );
  }
}

export default CountersPage;

// const setState = (cb) => {
//   let state;
//   const prevState = state;
//   const newState = cb(prevState);
//   state = newState;
// };
