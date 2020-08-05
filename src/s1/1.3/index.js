// Lesson 1.3: Creating variables using let
// ========================================

// Case 1:
// this example show that by using the 'var' keyword then the 'name' will be a property of the 'Window' object:

if (true) {
  // using the 'var' keyword:
  var name = 'Ryan';
  alert('Inside the conditional: ' + name);
}
alert('Outside the conditional: ' + name);


// Case 2:
// this example show that the 'let' keyword will keep the 'age' inside the conditional:

if (true) {
  // using the 'let' keyword:
  let age = 24;
  alert('Inside the conditional: ' + age);
}
// this code shoun't work because the 'age' is not defined: 
alert('Outside the conditional: ' + age);
