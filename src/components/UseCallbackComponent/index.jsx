import React, { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

const UseCallbackComponent = () => {
  const [counter, setCounter] = useState(0);
  const random = Math.random();

  const increment = () => {
    console.log(random);
    setCounter((prev) => prev + 1);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleIncrement = useCallback(increment, []);

  return (
    <div>
      <ChildComponent increment={handleIncrement} />
      <div>Counter: {counter}</div>
    </div>
  );
};

export default UseCallbackComponent;
