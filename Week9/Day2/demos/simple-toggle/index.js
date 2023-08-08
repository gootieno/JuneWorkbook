const initializePage = () => {
  const mainContainer = document.getElementById("main-container");

  mainContainer.addEventListener("click", () => {
    mainContainer.classList.toggle("dark-mode");

    // mainContainer.className.includes("dark-mode")
    //   ? mainContainer.classList.remove("dark-mode")
    //   : mainContainer.classList.add("dark-mode");
  });
};

window.onload = initializePage;
