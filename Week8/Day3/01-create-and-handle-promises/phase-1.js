function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done stretching");
      // reject("didn't stretch");
      console.log("done stretching");
    }, 1000);
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve("done running on treadmill");
      // reject("not running");
    }, 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve("done lifting weights");
    }, 2000);
  });
}

function workout() {
  // Your code here
  // stretch()
  //   .then(() => runOnTreadmill())
  //   .then(() => liftWeights())
  //   .then(() => console.log("done working out"));

  return Promise.all([stretch(), runOnTreadmill(), liftWeights()])
    .then((results) => {
      console.log("results from promise.all ", results);
    })
    .catch((error) => console.log(error));
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
