var cars = ["Saab", "Volvo", "BMW", "Ford", "Hyundai", "Maruti"];
var num = [45, 4, 9, 16, 25];

// Splicing array
// console.log("Array before sclicing : " + cars);
cars.splice(2,0,"Ford","Mercedes-Benz");
// console.log("Array after sclicing : " + cars);

// Slicing array
var slicedArr = cars.slice(0,3);
// console.log("Sliced array : " + slicedArr);

// Using array filter
var filteredNum = num.filter(function(value){
    return value>25;
});

// console.log("Filtered array : " + filteredNum);

// Using array.reduce
var reducedNum = num.reduce(function(total,value){
    return total+value;
});
// console.log("Reduced array : " + reducedNum);

// Using array.map
var mapNum = num.map(function(value){
    return value*2;
});
// console.log(mapNum);
