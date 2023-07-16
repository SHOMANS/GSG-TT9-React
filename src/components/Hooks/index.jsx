import React, { useEffect, useState } from 'react'
import Container from '../Container';

const Hooks = () => {
  
  // const [counter, setCounter] = useState(1);
  // const [counter2, setCounter2] = useState(5);

  const getData = () => {
    console.log("first");

    return{
      counter: 1,
      counter2: 5
    }
  }
  const [state, setState] = useState(() => getData())

  const handleIncreament = () => {
    setState(prevState => ({...prevState,counter: prevState.counter + 1}));
  }

  const handleIncreament2 = () => {
    setState(prevState => ({...prevState,counter2: prevState.counter2 + 1}));
  }

  const handleDecreament = () => {
    setState(prevState => ({...prevState,counter: prevState.counter - 1}));
  }

  useEffect(() => {
    console.log("mounted");

  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("timeout");
    }, 1000);

    return () => {
      // console.log("unmount");
      clearTimeout(timeout);
    }
  }, [state.counter, state.counter2])
  return (
    <Container>
      <h1>Hooks</h1>
      <button onClick={handleIncreament}>+</button>
      <div>{state.counter}</div>
      <button onClick={handleDecreament}>-</button>
      <br />
      <button onClick={handleIncreament2}>+</button>
      <div>{state.counter2}</div>
    </Container>
  )
}

export default Hooks