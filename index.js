function hasTargetSum(array, target) {
  const display = {};
  for (const number of array){
    const complement = target - number;
    //if any number in the array is the number listed in index.js to be true then return true
    if (complement in display) return true;
    display[number] = true;
}
//if not, display false
return false;

}


/* 
Time complexity
 0(n^2)
*/

/* 
pseudocode.

*/

/*
It has the 0(n^2) because it has one For Loop
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
