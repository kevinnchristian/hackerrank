/*
  Exercise:
     The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:

     Add everything except 1, the sum is 2 + 3 + 4 + 5.
     Add everything except 2, the sum is 1 + 3 + 4 + 5.
     Add everything except 3, the sum is 1 + 2 + 4 + 5.
     Add everything except 4, the sum is 1 + 2 + 3 + 5.
     Add everything except 5, the sum is 1 + 2 + 3 + 4.
  
  After this sum, get minimum and maximum results.
*/

let arr = [1, 2, 3, 4, 5];
let arrResult = arr.reduce((acc, indexActual) => acc + indexActual); // Reducer to sum up all elements contained in the array
let newArr = [];
let min = 0;
let max = 0;

// Every iteration, subtract arrResult - current_index_value
for (let x in arr) {
  newArr.push(arrResult - arr[x]);
}

// sort() to put in ascending order
newArr.sort((a, b) => a - b);
min = newArr[0];  // takes the first element, in this case min sum value
max = newArr[newArr.length - 1]; // takes the last element, in this case the sum value max

console.log(min + ' ' + max); // print side by side