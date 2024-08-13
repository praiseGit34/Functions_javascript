// Given a non-empty array of integers nums, every element appears 
//twice except for one. Find that single one.

function singleNumber(nums){
    let result=0;
    for(let num of nums){
        result^=num;//bitwise operator that assigns the result to num
        }
        return result;
}
console.log(singleNumber([2,2,1]));