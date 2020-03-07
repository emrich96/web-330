/*
=============================================
; Title:  Exercise 3.3
; Author: Emily Richter
; Date:   6 March 2020
; Description: Demonstrates the use of the Singleton Pattern
;              in a JavaScript program.
;============================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 3.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Same database instance? true
*/

// start program
var databaseSingleton = (function () {
  var instance;
  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

function databaseSingletonTest() {
  var Oracle = databaseSingleton.getInstance();
  var Informix = databaseSingleton.getInstance();
  console.log("One database instance? " + (Oracle === Informix));
};

databaseSingletonTest();
// end program
