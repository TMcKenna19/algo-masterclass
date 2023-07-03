/** This pattern uses objects or sets to collect values/frequencies of values 
This can often avoid the need for nested loops or O(n^2) operations with arrys / strings */

/** 
 * write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the secound array. The frewuency of the values must be the same. 
 * 
 * same([1,2,3], [4,1,9]) // true (does not need to be in order, just values are there) 
 * same([1,2,3], [1,9]) // false 
 * same([1,2,1], [4,4,1]) // false (must be same frequency)
 */

function same(arr1, arr2){
    if(arr1.length !== arr2.length) {
        return false;
    }   
    for(let i = 0; i < arr1.lenght; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

console.log(same([1,2,3,2], [9,1,4,4]));

/** Refactored */

function same(arr1, arr2) {
    if(arr1.lenght !== arr2.lenght){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1  
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter1)){
            return false
        }
        if(frequencyCounter2[key ** 2 ] !== frequencyCounter1[key]){
            return false 
        }
    }
    
    return true
}

console.log(same([2,2,3], [2,4,9]))

/**
 * ANAGRAMS
 * Given two strings, write a function to determine if the second string is an anagram of the first
 * loop string 
 * detirmine val of string 
 * compare val of rev string
 */

function validAnagram(first, second){
   if(first.length !== second.length){
        return false; 
   }
   const lookup = {};
   // store as an object 
   // a: 1
   // b: 1
   // c: 1
   
   for(let i = 0; i < first.length; i++){
       let letter = first[i]; // clean code 
       lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; //if there is a add 1 { a: 1 }
   }
   console.log(lookup)
   // { a: 1, b: 1, c: 1}

   for(let i = 0; i < second.length; i++){ //look at second string 
       let letter = second[i];
       if(!lookup[letter]){ //if letter does not match return false 
           return false;
       } else {
           lookup[letter] -= 1; // lookup letter subtracts one if there once all letters are 0 run true 
       }
   }
   return true
}
// lookup object { a: 1, b: 1, c: 1} 
console.log(validAnagram("abc", "cba"));

