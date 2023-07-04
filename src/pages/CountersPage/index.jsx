import React, { Component } from 'react';
import Container from '../../components/Container';
import Counter from '../../components/Counter';

class CountersPage extends Component {
  state = {
    counter1: 0,
    counter2: 0,
  };

  handleIncrease1 = () => {
    this.setState((prevState) => ({
      counter1: prevState.counter1 + 1,
    }));
  };

  handleDecrease1 = () => {
    this.setState((prevState) => ({
      counter1: prevState.counter1 - 1,
    }));
  };
  handleIncrease2 = () => {
    this.setState((prevState) => ({
      counter2: prevState.counter2 + 1,
    }));
  };

  handleDecrease2 = () => {
    this.setState((prevState) => ({
      counter2: prevState.counter2 - 1,
    }));
  };

  render() {
    return (
      <Container>
        <div>
          <Counter
            counter={this.state.counter1}
            handleDecrease={this.handleDecrease1}
            handleIncrease={this.handleIncrease1}
          />

          <Counter
            counter={this.state.counter2}
            handleDecrease={this.handleDecrease2}
            handleIncrease={this.handleIncrease2}
          />
        </div>

        {/* total: {counters.reduce()} */}
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
