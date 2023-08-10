import { useMemo, useState } from 'react';
import { useThemeContext } from './contexts/ThemeContext';

export default function UseMemoComponent() {
  const { theme } = useThemeContext();

  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(0);

  const operation = () => {
    let sum = 0;
    for (let i = +start; i <= 9999; i++) {
      for (let j = 0; j <= 99999; j++) {
        sum += i + j;
      }
    }
    return sum;
  };

  const myOperation = useMemo(operation, [start]);

  return (
    <div className={theme}>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <p>{counter}</p>

      <input
        type='number'
        onChange={(e) => setStart(e.target.value)}
        value={start}
      />

      <p>sum: {myOperation}</p>
    </div>
  );
}
