// Varibale as function

// var add = (function () {
//     var counter = 0;
//     return function () {counter += 1; return counter}
//   })();
  
// //   add();
// //   add();
// //   add();

// console.log(add());
// console.log(add());
// console.log(add());


// var top = 20;
// var inner = 50;
// function foo(){
//   var inner = 20;
//   console.log(inner);
// }
// foo();
// console.log(inner);

// This function run itself
// Imediately invoked function expression
// (function (){
//   var a =10; var b =15;
//   console.log(a+b);
// })();

// compiler goes up in heirarchy of scope to look for varibale
var a =10;
function foo(){
  // var b = a;
  // console.log(b);
  console.log(a);
}
foo();