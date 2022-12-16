// Write a program that prints on the console the perimeter and the area
// of a rectangle by given side and height entered by the user.

function area_and_perimeter(side, height){
    return `Perimeter is ${(side + height) * 2} and area is ${side * height}`; //used formatted string
}

console.log(area_and_perimeter(2,4));