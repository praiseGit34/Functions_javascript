// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

function getMajority(num) {
    for(i=0;i<num.length;i++){
        for(j=0;j<num.length;j++){
            if(i!=j && num[i]===num[j]){
                return num[i];
            }
    }
}
    return ;
}
getMajority([3,5,6,3,4,3,4]);e.log(findMajorityElement([3,2,3]));
