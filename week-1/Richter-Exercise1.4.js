/*
=============================================
; Title:  Exercise 1.4
; Author: Emily Richter
; Date:   17 February 2020
; Description: Exercise on Duck Typing
;============================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 1.4"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>
*/

// start program

// create constructor classes
function Car(model) {
  this.model = model;
};

function Truck(model, year) {
  this.model = model;
  this.year = year;
};

function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
};

// create prototype start method for each class
Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
};

Truck.prototype.start = function() {
  console.log("Truck added to the racetrack!");
};

Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack!");
};

var viper = new Car("Viper");
var f150 = new Truck("F-150", 2019);
var grandCherokee = new Jeep("Grand Cherokee", 2019, "Silver");

// define racetrack array
var racetrack = [];

// driveIt function to push new vehicles to racetrack array
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
};

// new vehicle classes
driveIt(viper);
driveIt(f150);
driveIt(grandCherokee);

// display racetrack lineup
console.log("\n-- The following vehicles have been added to the racetrack --");
for (var k = 0; k < racetrack.length; k++) {
  console.log(racetrack[k].constructor.name + ": " + racetrack[k].model);
};

// end program
