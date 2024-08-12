// Write a function named twoSum which takes two parameters: nums
// and target. Given an array of integer nums and an integer target, return
// indices of the two numbers such that they add up to the target. You
// may assume that each input would have exactly one solution, and you
// may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];//return indices
            }
        }
    }
    return [];
}
const answer=twoSum([2,7,11,15] ,26);//function call
console.log(answer);
