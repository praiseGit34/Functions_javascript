// Write a function to find the longest common prefix 
// string amongst an array of strings. If there is no common prefix, 
// return an empty string "".

function longestCommonPrefix(string){
    //if the array is empty return an empty string
    if(string.length ===0)return "";
    //then i start with the first string in the array
    let prefix=string[0];
    //looping through the rest of the Strings
    for (let i = 1; i < string.length; i++) {
        while (string[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            //if the prefix is empty then there is no common prefix
            if (prefix === "") return "";
        }
    }
    return prefix;

}
console.log(longestCommonPrefix(["flower" ,"flight","floor"]));
console.log(longestCommonPrefix(["car" ,"race","floor"]));
