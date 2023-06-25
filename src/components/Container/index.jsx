/**
 * stateful component: class component => functional component in React 16
 * stateless component: functional component => if its pure you can use pure component
 */

// import React, { PureComponent } from 'react';

// class Container extends PureComponent {
//   render() {
//     return <div>{this.props.children}</div>;
//   }
// }
import './style.css';

export const Container = ({ children, noSpaces }) => {
  return (
    <div
      className={`main__container ${
        noSpaces ? '' : 'main__container--padding'
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
