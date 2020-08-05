// Lesson 1.4: Template strings
// ========================================

let fname = 'Ryan';
let lname = "D";
let age = prompt('Get Ryan\' age');

// old way:
let result = 'Old way: ' + fname + ' ' + lname + ' is ' + age + ' years old.';
alert(result);

// new way using template string:
result = `New way: ${fname} ${lname} is ${age} years old.`;
alert(result);