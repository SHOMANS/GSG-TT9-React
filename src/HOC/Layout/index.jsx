import React from 'react';

const HOCLayout = (WrappedComponent) => {
  console.log('Outer');

  return ({ ...props }) => {
    console.log('Inner', props);

    return <WrappedComponent {...props} />;
  };
};

export default HOCLayout;

// export default HOCLayout(MyComponent)

// HOCLayout(MyComponent)(props)
// <MyComponent prop1={prop1} />

// <MyComponent prop1={prop1}/>
// {MyComponent({props1:prop1})}

// -------------------------------------
// -------------------------------------
// -------------------------------------
// -------------------------------------
// dispatch(myAction())
// const myAction = () => dispatch => {}
