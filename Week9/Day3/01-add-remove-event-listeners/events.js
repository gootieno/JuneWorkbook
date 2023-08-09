// Your code here
window.addEventListener("DOMContentLoaded", () => {
  //   alert("DOM has loaded");
  const redInput = document.getElementById("red-input");

  const changeRed = (event) => {
    if (event.target.value.toLowerCase().includes("red")) {
      event.target.style.backgroundColor = "red";
    } else {
      event.target.style.backgroundColor = "unset";
    }
  }
  
  redInput.addEventListener("input", changeRed);
  /*
    select add item button
    select list add input
    select the ul

    create list item
    set list item innerText to list add value
    append the list item to the ul
  */







  const addButton = document.getElementById("add-item");
  const list = document.getElementById("list-add");
  const ul = document.querySelector("ul");

  const createList = () => {
    if (!list.value.trim()) return;

    const listItem = document.createElement("li");
    listItem.innerText = list.value;
    ul.appendChild(listItem);

    list.value = "";
  };
  addButton.addEventListener("click", createList);

  const colorSelect = document.getElementById("color-select");
  const colorSelectSection = document.getElementById("section-3");

  const changeColor = () => {
    colorSelectSection.style.backgroundColor = colorSelect.value;
  };
  colorSelect.addEventListener("change", changeColor);

  const removeListeners = document.getElementById("remove-listeners");
  removeListeners.addEventListener("click", () => {
    redInput.removeEventListener("input", changeRed);
    addButton.removeEventListener("click", createList);
    colorSelect.removeEventListener("change", changeColor);
  });
});
