/*
=============================================
; Title:  Exercise 2.2
; Author: Emily Richter
; Date:   29 February 2020
; Description: Prototypes
;============================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 2.2"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 The person's full name is '<fullname>.'
 The person's age is '<age>.'
*/

// Start program

var person = {
  getAge: function(){
    console.log("The person's age is " + this.age);
  }
};

var me = Object.create(person, {
  "age": {
    "value": 24,
    enumerable: true
  },

  "fullName": {
    "value": "Emily Richter"
  }
});

// Output

console.log("This person's full name is " + me.fullName);
me.getAge();


// End program
