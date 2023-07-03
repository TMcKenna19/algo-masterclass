/**
 * Write a function called maxSubarraySum which accepts an array of intergers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
 * ([1,2,5,2,8,1,5],2) // 10
 * ([1,2,5,2,8,1,5],4) // 17
 */

function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null;
    }
    var max = -Infinity; // edge case for negitive numbers 
    for(let i = 0; i < arr.length - num + 1; i++){
        temp = 0; 
        for(let j = 0; j < num; j++){
            temp += arr[i + j]; 
        }
        if(temp > max){
            max = temp; 
        }
        console.log(temp, max)
    }
    return max
}
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));

//Refactor
function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null; // checks edge case of array less than number 
    for (let i = 0; i < num; i++){ // loops what num value is 
        maxSum += arr[i]; // adds first two numbers  arr[0] + arr[1]
    }
    tempSum = maxSum; // sets maxSum = 3 
    for (let i = num; i < arr.length; i++){ // i = 2, i pointing arr[2]
        tempSum = tempSum - arr[i - num] + arr[i];
        console.log("tempSum", tempSum)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([1,2,5,2,8,1,5],2))