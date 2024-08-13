// Given an integer array nums, return true if any value 
// appears at least twice in the array, and return false 
// if every element is distinct.

function containDuplicate(nums){
    const numbers=new Set();

    for(let num of nums){
        if(numbers.has(num)){
            return true;
        }
        numbers.add(num);
    }
    return false;
}
console.log(containDuplicate([1,2,3,4]));
console.log(containDuplicate([1,2,3,3,4]));