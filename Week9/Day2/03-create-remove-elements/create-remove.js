/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();

    const url = data.message; // URL of new dog image
    console.log("data ", data);
    console.log("url from data ", url);

    const urlParts = url.split("/");
    console.log("url parts ", urlParts);

    const dogBreed = urlParts[4];
    console.log("dog breed ", dogBreed);
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
    const dogsContainer = document.querySelector(".gallery > ul");

    const dogsListItem = document.createElement("li");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCaption = document.createElement("figcaption");

    img.setAttribute("src", url);
    figCaption.innerText = dogBreed;

    figure.append(img, figCaption);
    dogsListItem.appendChild(figure);

    console.log("dogs list item ", dogsListItem);

    dogsContainer.appendChild(dogsListItem);
    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    // Your code here

    /* Add the new dog card as a child to the ul in the .gallery element */
    // Your code here
    const removeFirst = document.getElementById("remove-first");
    removeFirst.removeAttribute('disabled');  
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
  const firstDog = document.querySelector("ul > li");

  if (firstDog) firstDog.remove();
  else removeFirst.setAttribute("disabled", true);
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
  /*-------------------- Select the last dog card ----------------------- */
  // Your code here
  /*-------------------- Remove the last dog card ----------------------- */
  // Your code here
  const lastDog = document.querySelectorAll("ul > li");
  if (lastDog.length > 0) lastDog[lastDog.length - 1].remove();
});
