// Write an expression that checks whether the third bit in a given integer
// is 1 or 0.

function thirdIsOneOrZero(number){
    if(number.toString()[2] == '1' || number.toString()[2] == '0'){
        return true;
    }
    else{
        return false;
    }
}
console.log(thirdIsOneOrZero(1295)); //returns false