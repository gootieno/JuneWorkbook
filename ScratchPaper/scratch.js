window.addEventListener("DOMContentLoaded", () => {
  const outerDiv = document.getElementById("outer-div");
  const innerDiv = document.getElementById("inner-div");
  const sibling = document.getElementById("sibling");

  outerDiv.addEventListener(
    "click",
    (event) => {
      //   event.stopPropagation();
      console.log("outer div clicked");

      // console.log('event ',  event.target)
    },
    true
  );

  innerDiv.addEventListener("click", () => {
    console.log("inner div clicked");
  });
});
