import { Component } from 'react';
import './style.css';
class Counter extends Component {
  render() {
    const { handleIncrease, handleDecrease, value, id } = this.props;
    return (
      <div className='counter'>
        <button disabled={!value} onClick={() => handleDecrease(id)}>
          Decrease
        </button>
        <p>{value}</p>
        <button onClick={() => handleIncrease(id)}>Increase</button>
      </div>
    );
  }
}

export default Counter;
