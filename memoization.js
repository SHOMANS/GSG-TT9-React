const results = {};

const func = (input) => {
  if (results[input]) {
    console.log('memoized output');
    return results[input];
  }
  console.log('memoization');
  let result = input + 1;
  results[input] = result;
  return result;
};

console.log(func(2));
console.log(func(2));
console.log(func(3));
console.log(func(3));
console.log(func(3));
console.log(func(2));
