// Your code here
window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const shoppingListName = document.getElementById("name");
  const shoppingListType = document.getElementById("type");
  const shoppingList = document.getElementById("shopping-list");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const list = document.createElement("li");
    list.innerText = shoppingListName.value;
    list.setAttribute("data-type", shoppingListType.value);

    shoppingList.appendChild(list);
    shoppingListName.value = "";
  });
});
