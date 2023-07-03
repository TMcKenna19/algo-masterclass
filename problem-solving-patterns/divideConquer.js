/**
 * Divide and Conquer 
 * 
 * This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.
 * 
 * Given a sorted array of integers, write a function called search, that accpets a value and returns th index where the value passed to the function is located. If the value is not found, return -1
 * search([1,2,3,4,5,6], 4) // 3
 * search([1,2,3,4,5,6], 6) // 5
 * search([1,2,3,4,5,6], 11) // -1
 */

function search(arr, val){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === val){
            return i
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6], 4)); 

//Refactor Binary Search
function search(array, value) {
    let min = 0;
    let max = array.length - 1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];

        if(array[middle] < value) {
            min = middle + 1;
        }
        else if(array[middle] > value) {
            max = middle - 1; 
        }
        else {
            return middle
        }
    }
    return -1
}

console.log(search([1,2,3,4,5,6], 4))

/**
 * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

 Your solution MUST have the following complexities:
 sameFrequency(182,281) // true
 sameFrequency(34,14) // false
 sameFrequency(3589578, 5879385) // true
 sameFrequency(22,222) // false

 */

 function sameFrequency(numOne, numTwo) {
    let strNumOne = numOne.toString();
    let strNumTwo = numTwo.toString();
    if(strNumOne.length !== strNumTwo.length)return false;

    let countNumOne = {};
    let countNumTwo = {};

    for(let i = 0; i < strNumOne.length; i++) {
        countNumOne[strNumOne[i]] = (countNumOne[strNumOne[i]] || 0) + 1
    }

    for(let j = 0;  j < strNumTwo.length; j++){
        countNumTwo[strNumTwo[j]] = (countNumTwo[strNumTwo[j]] || 0) +1
    }

    for(let key in countNumOne){
        if(countNumOne[key] !== countNumTwo[key]) return false; 
    }

    return true
    
 }

 /**
  * Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

 areThereDuplicates(1, 2, 3) // false
 areThereDuplicates(1, 2, 2) // true 
 areThereDuplicates('a', 'b', 'c', 'a') // true 

 */