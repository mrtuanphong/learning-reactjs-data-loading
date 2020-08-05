// Lesson 1.7: Arrow functions and this keyword
// ========================================

let nepal = {
  // add property:
  mountains: ['Everest', 'Fish Tail', 'Annapura'],
  // add method:
  printWithDash: function() {
    // 'this' should refer to the 'nepal' object:
    console.log('Inside printWithDash', this); 

    // Toggle the code comment between [1] and [2] to see the diference:

    // [1]
    // setTimeout(function() {
    //   // 'this' will refer to the 'Window' object,
    //   // therefore to refer to the 'nepal' object
    //   // we could use an Arrow Function here, inside the 'setTimeout()'
    //   // instead of using 'function()'
    //   console.log('Inside setTimeout', this); 

    //   //console.log(this.mountains.join(' - '));
    // }, 3000)

    // [2]
    setTimeout(() => { console.log('Inside setTimeout', this) }, 3000); // using an Arrow function
    
  }
}

nepal.printWithDash();