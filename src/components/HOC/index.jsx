import React from 'react';
import { useParams } from 'react-router-dom';

export default (WrappedComponent) => {
  const params = useParams();
  return ({ ...props }) => <WrappedComponent params={params} {...props} />;
};

// HOC(<MyComponent/>)

// const test = (prop) => {
//   return (childProp) => {
//     console.log(prop);
//   };
// };

// console.log(test('test')('test2'));
// myComponent(MyComponent)({test:false})

// app
// <MyComponent test={false} />

// MyComponent
// export default HOC(MyComponent)
