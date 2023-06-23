const ABOUT_OBJECT = {
  firstName: 'Saja',
  lastName: 'Awadallah',
  age: 25,
  isMarried: false,
  hobbies: ['reading', 'swimming', 'coding'],
  address: {
    city: 'Amman',
    country: 'Jordan',
  },
  sayHello: function () {
    return `Hello from ${ABOUT_OBJECT.firstName}`;
  },
};

export default ABOUT_OBJECT;
