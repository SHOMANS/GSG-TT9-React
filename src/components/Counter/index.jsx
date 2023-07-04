import { Component } from 'react';

class Counter extends Component {
  componentDidMount() {
    // console.log('componentDidMount from Counter');
  }

  componentWillUnmount() {
    console.log('counter componentWillUnmount');
  }
  render() {
    // console.log('render from counter');
    const { handleIncrease, counter, handleDecrease } = this.props;

    return (
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <p>Counter: {counter}</p>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    );
  }
}

export default Counter;
