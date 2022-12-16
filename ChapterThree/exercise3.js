// Write an expression that looks for a given integer if its third digit (right
//     to left) is 7.

function thirdIsSeven(number){
    if(number.toString()[2] == '7'){
        return true;
    }
    else{
        return false;
    }
}
console.log(thirdIsSeven(1275)) //returns true since third digit is 7