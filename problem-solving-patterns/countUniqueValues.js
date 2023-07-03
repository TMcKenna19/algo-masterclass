/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique vlaues in the array. There can be negative numbers in the array, but it will aways be sorted. 
 * 
 *[1,2,3,4,4,4,7,7,12,12,13] // 7 
 */

function countUniqueValues(arr){
    var i = 0; 
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i+1; 
}

console.log(countUniqueValues([1,1,1,1,2,3,3,3,4]));
