/**
 * Multiple Pointers 
 * 
 * Createing pointers or values that correspond to an index of position and move towards the beginning,
 * end of middle based on a certain condition. 
 * 
 * Very efficient for solving problems with minimal space complexity as well 
 */

/**
 * Write a function called sumZero which accepts a sorted array of intergers. The function should find the first pair when the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist 
 * 
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) //undefined
 * sumZero([1,2,3]) // undefined 
 */

 
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));

//Refactor useing pointers 
function sumZero(arr){
    let left = 0;
    let right = arr.lenght - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0 ){
            return [arr[left], arr[right]];
        } else if(sum > 0){
            right--;
        }else {
            left++;
        }
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5]));