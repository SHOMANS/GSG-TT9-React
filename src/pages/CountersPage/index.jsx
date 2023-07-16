import { useState } from 'react';

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

const CountersPage = () => {
  const [counters, setCounters] = useState(() => INITIAL_COUNTERS_VALUES);

  const handleIncrease = (id) => {
    setCounters((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        value: prevState[id].value + prevState[id].amount,
      },
    }));
  };

  const handleDecrease = (id) => {
    if (counters[id].value !== 0) {
      setCounters((prevState) => ({
        ...prevState,
        [id]: {
          ...prevState[id],
          value: prevState[id].value - prevState[id].amount,
        },
      }));
    }
  };

  return (
    <Container>
      <div>
        {Object.entries(counters).map(([key, object]) => (
          <Counter
            key={key}
            id={key}
            value={object.value}
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
          />
        ))}
      </div>
      total:
      {Object.values(counters).reduce((acc, cur) => acc + cur.value, 0)}
    </Container>
  );
};

export default CountersPage;

// const useTestState = (initialValue) => {
//   let state = initialValue;

//   const setState = (cb) => {
//     const newState = typeof cb === 'function' ? cb(state) : cb;
//     state = newState;
//   };

//   return [state, setState];
// };

// eslint-disable-next-line react-hooks/rules-of-hooks
// const [state, setState] = useTestState(0);

// console.log(state);

// setState(1);

// console.log(state);

// setState((prevState) => prevState + 1);

// const arr = [1, 2, 3, 4];

// const [, secondValue] = arr;

// console.log(secondValue);
