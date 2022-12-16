// Write a Boolean expression that checks whether a given integer is
// divisible by both 5 and 7, without a remainder.

function divisible_by_5_and_7(number){
    if(number % 5 == 0 && number % 7 == 0){
        return "Divisible by both 5 & 7";
    }
    else{
        return "Not divisible by both 5 & 7";
    }
}

console.log(divisible_by_5_and_7(35)); //returns true