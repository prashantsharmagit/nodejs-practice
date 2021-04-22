var points = [40, 100, 1, 5, 25, 10];
function myFunction() {
    points.sort(function(a, b){return a - b});
    console.log(points);
}

function compare(a,b){
    // return -1    a>>b
    // return 1     b>>a
    // retunr 0     b==a
}

myFunction();