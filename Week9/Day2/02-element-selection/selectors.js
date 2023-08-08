const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seeded = document.getElementsByClassName("seed");
  console.log("seeded ", seeded);
  // 2. Get all seedless fruit elements
  // Your code here
  const seedless = document.getElementsByClassName("seedless");
  console.log("seedless ", seedless);
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedless = document.querySelector(".seedless");
  console.log("first seedless ", firstSeedless);
  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const youDiv = document.getElementById("wrapper");
  
  youDiv.style.borderWidth = "1px";
  youDiv.style.borderColor = "blue";
  youDiv.style.borderStyle = "solid";

  const youSpan = youDiv.querySelector("span");
  console.log("span text ", youSpan.innerText);
  // 5. Get all children of element "wrapper"
  // Your code here
  const wrapperChildren = youDiv.children;
  console.log("#wrapper children ", wrapperChildren);
  // 6. Get all odd number list items in the list
  // Your code here
  const oddList = document.querySelectorAll("#two .odd");
  console.log("odd list ", oddList);
  // 7. Get all even number list items in the list
  // Your code here
  const evenNums = [...oddList].map((el) => el.nextElementSibling);
  console.log("even nums ", evenNums);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const sectionThree = document.getElementById("three");

  const pTag = sectionThree.querySelector("p");

  const classLessTech = pTag.children[0];
  console.log("classless tech ", classLessTech);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = document.getElementsByClassName("shopping");
  console.log("Amazon ", amazon);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  const unicorns = [...document.getElementsByClassName("unicorn")].map(
    (el) => el.parentElement
  );

  console.log("unicorns ", unicorns);

  //SET ATTRIBUTE
  document.body.setAttribute("class", "darkMode");
};

window.onload = select;
