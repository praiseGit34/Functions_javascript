// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

function findMajorityElement(nums){
    let num=null;
    let count=0;
    for(num of nums){
        if(count ===0){
            num=num;
        }
        //Increment count if num is the num, otherwise decrement
        count += (num === num) ? 1 : -1;
    }
    return num;
}
console.log(findMajorityElement([2,2,1,1,1,2,2]));
console.log(findMajorityElement([3,2,3]));
