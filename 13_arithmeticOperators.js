// Program to calculate area and perimeter of rectangle

function areaR(length1,width1) {
    let area;
    area = length1 * width1;
    return area;
}
function perimeterR(length1,width1) {
    let perimeter;
    perimeter = 2*(length1 + width1);
    return perimeter;
}

    var length = 10;
    var width = 50;
    console.log("Area of rectangle is : " + areaR(length,width));
    console.log("Perimeter of rectangle is : " + perimeterR(length,width));
