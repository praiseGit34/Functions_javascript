// Write a function named firstPalindrome which takes a parameter:
// words. Given an array of string words, return the first palindromic string
// in the array. If there is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.
function firstPalindrome(words) {
    for (let word of words) {
        // turn element into an array
        let reversedWord=word.split('').reverse().join('');
        if (word ===reversedWord) {
            return word;
        }
    }
    return "";
}
console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
