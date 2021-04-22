//  Below price1, price2, and totalPrice are variables
var price1 = 10;    // = is an assignment operator
var price2 = 50;
var totalPrice = price1 + price2;   //Algebra
console.log("Total result is : " + totalPrice);    //printing

// Declaring varibale
var car;
// assigning value
car = "ford";
console.log(car);

// variable can start with (A-Z or a-z) or $ or _(underscore)
var $$$ = "Hello World";
var _num = 2;
var myMoney = 5;
console.log($$$ + " " + _num + " " + myMoney);


var x = 10;
console.log("x = " + x);
{
    var x = 2;
    console.log("x = " + x);
}
console.log("x = " + x);

// To solve aboce problem we use let
var x = 10;
// let x = 50;  //Declaring variable in same scope is not allowed
console.log("x = " + x);
{
    let x = 2;
    console.log("x = " + x);
}
console.log("x = " + x);


// Const in used to declare Constants
const anum = 10;
// const are needed to assigned when declared
// const cannot be updated >>>> num = num + 10;



// You can create a const object:
const car1 = {type:"Fiat", model:"500", color:"white"};
// property can be changed
car1.color = "red";
// Property can be added
car1.owner = "Johnson";
console.log(car1);
// But you can NOT reassign a constant object:


var num3 = 5;
co
{
    let num3 = 10;

}

