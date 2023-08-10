import { memo } from 'react';

const ChildComponent = ({ increment }) => {
  const random = () => {
    let start = Math.round(Math.random() * 1000);
    let sum = 0;
    for (let i = +start; i <= 9999; i++) {
      for (let j = 0; j <= 99999; j++) {
        sum += i + j;
      }
    }
    return sum;
  };

  return <button onClick={increment}>ChildComponent {random()}</button>;
};

export default memo(ChildComponent);
