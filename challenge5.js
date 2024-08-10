// Given an integer num, write a function that repeatedly adds all its digits
// until the result has only one digit, and return it.

function addDigits(num){
    while(num>9){//as long as the number has more than one digit
        num=sumDigits(num);//now num becomes the sum of the first num
    }
    return num;//if num is a single digit
}

function sumDigits(num){
    let sum=0;
    while(num>0){
        sum+=num %10;
        num=Math.floor(num/10);//after rounding off
    }
    return sum;
}
console.log(addDigits(123));