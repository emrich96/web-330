/*
=============================================
; Title:  Exercise 3.2
; Author: Professor Krasso
; Date:   6 March 2020
; Modified By: Emily Richter
; Description: Demonstrates the use of the Factory Pattern
;              in a JavaScript program.
;============================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 3.2"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }
 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }
*/

// Start program

// Create 2 new databases
function Oracle(properties) {
  this.username = properties.username || "notadmin";
  this.password = properties.password || "notpassword";
  this.server = properties.server || "localhost:1234";
  this.version = properties.version || 1.1;
}

function Informix(properties) {
  this.username = properties.username || "user";
  this.password = properties.password || "alsonotpassword";
  this.server = properties.server || "localhost:5678";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = Informix;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  } else {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

// Create factories by calling DatabaseFactory prototype function
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "notadmin",
  password: "notpassword"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "user",
  password: "alsonotpassword"
});

// Output

console.log(oracle);
console.log(informix);
// End program
