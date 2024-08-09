function fizzBuzz(string1,string2){
    const combLength=string1.length + string2.length;
    if(combLength %3===0 && combLength %5===0){
        return "fizzBuzz";
    }else if(combLength %3===0){
        return "Fizz";
    }else if(combLength %5===0){
        return "Buzz";
    }else{
        return "";
    }
}
console.log(fizzBuzz("hello","world"));
console.log(fizzBuzz("Agumenaitwe","pelo"));
