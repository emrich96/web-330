/*
=============================================
; Title:  Exercise 1.3
; Author: Emily Richter
; Date:   17 February 2020
; Description: JavaScript class refresher
;============================================
*/

// Required import statement for header
const header = require('../RichterEmily');
// Output header
console.log(header.display("Emily", "Richter", "Exercise 1.3"));

/*
 Expected output:
 FirstName LastName
 <AssignmentName>
 <Today's Date>
 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>
*/

// start program

// create cellPhone object
function cellPhone(manufacturer, model, color, price) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
  
    // returns price
    this.getPrice = function() {
      return (
        this.price
        );
    };

    // returns model
    this.getModel = function() {
        return (
          this.model
        );
    };

    // calls upon getPrice and getModel functions; returns Manufacturer, Model, Color, and Price
    this.getDetails = function() {
        return (
            `-- DISPLAYING CELL PHONE DETAILS --\nManufacturer: ${this.manufacturer}\nModel: ${this.getModel()}\nColor: ${this.color}\nPrice: ${this.getPrice()}`
        );
    };
  }
  
  // Instantiate a new cellPhone class and pass-in the parameters of argument
  var cellphone = new cellPhone("Samsung", "Galaxy S20", "Black", "$999");

  console.log(cellphone.getDetails());
  

// end program