import React, { Component } from 'react';
import Container from '../../components/Container';
import Counter from '../../components/Counter';

const INITIAL_COUNTERS_VALUES = {
  1: {
    value: 0,
    amount: 2,
  },
  2: {
    value: 0,
    amount: 5,
  },
  3: {
    value: 0,
    amount: 1,
  },
};

class CountersPage extends Component {
  state = {
    counters: INITIAL_COUNTERS_VALUES,
  };

  handleIncrease = (id) => {
    this.setState((prevState) => ({
      counters: {
        ...prevState.counters,
        [id]: {
          ...prevState.counters[id],
          value: prevState.counters[id].value + prevState.counters[id].amount,
        },
      },
    }));
  };

  handleDecrease = (id) => {
    if (this.state.counters[id].value !== 0) {
      this.setState((prevState) => ({
        counters: {
          ...prevState.counters,
          [id]: {
            ...prevState.counters[id],
            value: prevState.counters[id].value - prevState.counters[id].amount,
          },
        },
      }));
    }
  };

  shouldComponentUpdate() {
    if (this.state.counters[1].value > 20) return true;
    if (this.state.counters[1].value > 10) return false;
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log('getSnapshotBeforeUpdate', props, state);
    return null;
  }

  render() {
    return (
      <Container>
        <div>
          {Object.entries(this.state.counters).map(([key, object]) => (
            <Counter
              key={key}
              id={key}
              value={object.value}
              handleDecrease={this.handleDecrease}
              handleIncrease={this.handleIncrease}
            />
          ))}
        </div>
        total:
        {Object.values(this.state.counters).reduce(
          (acc, cur) => acc + cur.value,
          0
        )}
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
