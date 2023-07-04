import React, { Component } from 'react';
import Container from '../../components/Container';
import Counter from '../../components/Counter';
import Card from '../../components/Card';

class LifeCyclePage extends Component {
  constructor(props) {
    super(props);
    console.log('from constructor');
  }

  state = {
    counter: 0,
    isCounterExist: true,
  };

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
              counter: this.state.counter,
              handleDecrease: this.handleDecrease,
              handleIncrease: this.handleIncrease,
            }}
          />
        )}
        {/* <Card /> */}
      </Container>
    );
  }
}

export default LifeCyclePage;
