const arr = new Array(1,2,3,4)
console.log(arr[0]);

// slice -> range is not included and the original array remains the same

// splice -> range is included and the orginal array also gets the remaining elements after the splice ops

const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2] // spreading arrays elements individually!
console.log(arr3);
