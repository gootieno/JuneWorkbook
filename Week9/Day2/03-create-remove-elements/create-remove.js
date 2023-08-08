/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image
    console.log("data ", data);
    console.log("url from data ", url);
    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // Your code here

    // const section = document.querySelector("section");

    // const div = document.createElement("div");

    // const button = document.createElement("button");

    // button.innerText = "Click Me";

    // div.appendChild(button);

    // div.setAttribute("class", "section-child");

    // section.appendChild(div);

    /*
    <ul>
        <li>
            <figure>
                <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
                <figcaption>hound-afghan</figcaption>
            </figure>
        </li>
    </ul>

    1. create/select elements 
      - create elements if needed
      - select a live element 
    
    2. manipulation
      set innerText/attributes on created elements

    3. append all elements in order all the way to live element

    */

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
  /*-------------------- Select the first dog card --------------------- */
  // Your code here
  /*-------------------- Remove the first dog card --------------------- */
  // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
});
