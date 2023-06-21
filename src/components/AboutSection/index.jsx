import React, { Component } from 'react';

const ABOUT_OBJECT = {
  // name: undefined,
  firstName: 'Saja',
  lastName: 'Awadallah',
  age: 25,
  isMarried: false,
  hobbies: ['reading', 'swimming', 'coding'],
  // address: {
  //   city: 'Amman',
  //   country: 'Jordan',
  // },
  sayHello: function () {
    return `Hello from ${ABOUT_OBJECT.firstName}`;
  },
};

class AboutSection extends Component {
  // getFullName = (obj) => {
  //   const { firstName, lastName } = obj;
  getFullName = ({ firstName, lastName }) => {
    return `${firstName} ${lastName}`;
  };

  render() {
    const { age, isMarried, hobbies, address, sayHello } = ABOUT_OBJECT;

    return (
      <React.Fragment>
        {ABOUT_OBJECT.name}
        <div style={{ margin: '1rem auto', width: '500px' }}>
          <h2>About Section</h2>
          {/* <p>Name: {this.getFullName?.(firstName, lastName)?.names?.[0]?.myName}</p> */}
          <p>Name: {this.getFullName(ABOUT_OBJECT)}</p>
          <p>Age: {age}</p>
          <p>{isMarried ? 'Married' : 'Not Married'}</p>
          <p>Hobbies: {hobbies.join(', ')}</p>
        </div>

        <div style={{ margin: '1rem auto', width: '500px' }}>
          {/* <p>City: {ABOUT_OBJECT?.address?.city}</p> */}
          {/* <p>City: {ABOUT_OBJECT && ABOUT_OBJECT.address && ABOUT_OBJECT.address.city && ABOUT_OBJECT.address.city}</p> */}
          {/* <p>City: {ABOUT_OBJECT?.address?.city ?? '-'}</p> */}
          {/* <p>City: {ABOUT_OBJECT?.address?.city || '-'}</p> */}
          <p>Country: {address?.country ?? '-'}</p>
          <p>{sayHello()}</p>
          <p>{5 + 35423}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default AboutSection;
