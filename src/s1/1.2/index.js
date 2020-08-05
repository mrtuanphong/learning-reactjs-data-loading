// Lesson 1.2: Creating variables using const

// Variable in Javascript:
// =======================

// create a variable with its value:
var name = 'Ryan';
alert('Old name: ' + name);

// then change it's value:
name = 'Zen';
alert('New name: ' + name);


// Constant in Javascript:
// =======================

// create a constant:
const age = 20;
alert('Old age: ' + age);

// the constant is not able to change,
// therefore this code will get error in Console window:
// "Uncaught TypeError: Assignment to constant variable."
age = 37;
alert('New age: ' + age);
