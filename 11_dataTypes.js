// JavaScript Types are Dynamic
var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String

var y = 123e5;      // 12300000
var x = 5;
var y = 5;
var z = 6;
console.log(x == y);        // Returns true
console.log(x == z);       // Returns false

// Arrays
var cars = ["Saab", "Volvo", "BMW"];
// JS object - name value pairs
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// typeof can be used ---
console.log(typeof(person));


var firstInteger = 4;
var secondInteger = 12;
var firstDecimal = 4.0;
var secondDecimal = 4.32;
var firstString = 'HackerRank ';
console.log(firstInteger + secondInteger);      //console.log(parseInt(firstInteger) + parseInt(secondInteger));
console.log(firstDecimal + secondDecimal);      //console.log(parseFloat(firstDecimal) + parseFloat(secondDecimal));
console.log(firstString + "website");