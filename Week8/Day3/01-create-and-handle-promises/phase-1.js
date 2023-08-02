function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("done stretching");
      reject("did not have time to stretch");
      console.log("done stretching in function");
    }, 1000);
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 100);
  });
}

function liftWeights() {
  // Your code here
}

function workout() {
  // Your code here
  stretch()
    .then((response) => {
      console.log("response: ", response);
    })
    .catch((error) => console.log("error: ", error));
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
