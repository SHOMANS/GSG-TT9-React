import { useReducer } from 'react';

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

const COUNTERS_ACTIONS = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
};

// action.type = (INCREASE, DECREASE)

/**
 * action = {
 *  type: "INCREASE" | "DECREASE",
 *  payload: 1 | 2 | 3
 * }
 */

const reduce = (state, action) => {
  switch (action.type) {
    case COUNTERS_ACTIONS.INCREASE:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          value: state[action.payload].value + state[action.payload].amount,
        },
      };
    case COUNTERS_ACTIONS.DECREASE:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          value: state[action.payload].value - state[action.payload].amount,
        },
      };
    default:
      throw Error('wrong action type');
  }
};

const CountersPage = () => {
  const [state, dispatch] = useReducer(reduce, INITIAL_COUNTERS_VALUES);

  // handlers
  const handleIncrease = (id) =>
    dispatch({ type: COUNTERS_ACTIONS.INCREASE, payload: id });
  const handleDecrease = (id) =>
    dispatch({ type: COUNTERS_ACTIONS.DECREASE, payload: id });

  return (
    <Container>
      <div>
        {Object.entries(state).map(([key, object]) => (
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
      {Object.values(state).reduce((acc, cur) => acc + cur.value, 0)}
    </Container>
  );
};

export default CountersPage;
