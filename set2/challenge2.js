// Given an integer array nums, return true if any value 
// appears at least twice in the array, and return false 
// if every element is distinct.
function repeatNum(num) {
    for(i=0;i<num.length;i++){
        for(j=0;j<num.length;j++){
            if(i!=j && num[i]===num[j]){
                return true;
            }
    }
}
    return false;
}
repeatNum([4,5,6,3,7,4]);
