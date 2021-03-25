/*

-> Rules:
  - If a> b, Alice gets 1 point
  - If a <b, Bob gets 1 point
  - If a == b, Alice and Bob don't score points
  
*/

let a = [10, 12, 50];
let b = [20, 20, 10];

function compareTriplets(a, b) {
  let arr = []
  let alice = 0;
  let bob = 0;
  
  for (let x in a) {
    a[x] > b[x] ? alice += 1 : alice += 0
    a[x] < b[x] ? bob += 1 : bob += 0
  }
  
  arr.push(alice, bob);
  return arr;
}

compareTriplets(a, b);