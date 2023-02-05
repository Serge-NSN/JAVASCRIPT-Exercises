// Write an expression that checks for a given point {x, y} if it is within
// the circle K({0, 0}, R=5). Explanation: the point {0, 0} is the center of
// the circle and 5 is the radius.

function checkPoint(x,y){
    if ((x <= 5 && x >= -5) && (y <= 5 && y >= -5)){
        return "Point is within the circle";
    }
    else{
        return "Point is NOT within the circle";
    }
}
console.log(checkPoint(-2,6)); //Prints point is not within the circle since 6 is already out of range