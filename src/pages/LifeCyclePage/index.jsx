import React, { Component } from 'react';
import Container from '../../components/Container';
import Counter from '../../components/Counter';

class LifeCyclePage extends Component {
  constructor(props) {
    super(props);
    console.log('from constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);
    if (!state.isUpdated)
      return {
        counter: props.counter,
        isUpdated: true,
      };
    return state;
  } // it takes the props and state as parameters, and it returns the new state

  // UNSAFE_componentWillMount() {
  //   console.log('from UNSAFE_componentWillMount');
  // } // before first render only and its legacy

  // UNSAFE_componentWillReceiveProps() {
  //   console.log('from UNSAFE_componentWillReceiveProps');
  // } // before every update and its legacy

  // UNSAFE_componentWillUpdate() {
  //   console.log('from UNSAFE_componentWillUpdate');
  // } // before every update and its legacy

  state = {
    counter: 0,
    isCounterExist: true,
    isUpdated: false,
  };

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    if (this.state.counter > 20) return true;
    if (this.state.counter > 10) return false;
    return true;
  } // it returns boolean value that will insure that the component will update or not

  getSnapshotBeforeUpdate(props, state) {
    console.log('getSnapshotBeforeUpdate', props, state);
    return null;
  } // it takes the props and state as parameters, and it returns the new state

  componentDidMount() {
    console.log('from componentDidMount');
  } // after first render only

  componentDidUpdate() {
    console.log('from componentDidUpdate');
    if (this.state.counter === 5 && this.state.isCounterExist) {
      this.setState({ isCounterExist: false });
    }
  } // after every update

  handleIncrease = () =>
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));

  handleDecrease = () => {
    if (this.state.counter > 0)
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
  };

  render() {
    console.log('From render');

    return (
      <Container>
        <h1>Component Life Cycle</h1>
        {this.state.isCounterExist && (
          <Counter
            {...{
              value: this.state.counter,
              handleDecrease: this.handleDecrease,
              handleIncrease: this.handleIncrease,
            }}
          />
        )}
      </Container>
    );
  }
}

export default LifeCyclePage;
