// Write an expression that checks for given point {x, y} if it is within the
// circle K({0, 0}, R=5) and out of the rectangle [{-1, 1}, {5, 5}].
// Clarification: for the rectangle the lower left and the upper right corners
// are given.
function checkPoint(x,y){
    if ((x <= 5 && x >= -5) && (y <= 5 && y >= -5)){
        if (((x <= 5 && x >= -1) && (y <=5 && y >= 1))==false){
            return "True";
        }
        else{
            return "False";
        }
    }
    else{
        return "False";
        }
}
console.log(checkPoint(2,3));
