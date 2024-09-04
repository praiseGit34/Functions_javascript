
function sortArray(someArray) {
    let even = [];
    let odd = [];
    let char = [];

    for (let value of someArray) {
        if (typeof value === 'number') {
            if (value % 2 === 0) {
                even.push(value);
            } else {
                odd.push(value);
            }
        } else {
            char.push(value);
        }
    }
    even.sort((a, b) => a - b); 
    odd.sort((a, b) => a - b);  
    char.sort();
    return { even, odd, char }; 
}

const call = sortArray(['r', 3, 4, 7, 2, 'y', 'w']);
console.log(call);
