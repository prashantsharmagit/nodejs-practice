var data = '{"name": "John", "age": 31, "city": "New York"}';
// Converting from JSON to javascript object
var myjson = JSON.parse(data);
console.log(myjson);
// Convertin from JS object to JSON object
var obj1 = JSON.stringify(myjson);
// console.log(obj1);

// Accessing value
var value = myjson.name;
// console.log(value);

// Looping and getting key value pair
// for(var key in myjson){
//     console.log("Key : " + key + "\tValue : " + myjson[key]);
// }

// Copying JSON
let copy = myjson;
console.log(copy);