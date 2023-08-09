export const createNavContainer = () => {
  const navContainer = document.createElement("div");

  navContainer.setAttribute("id", "nav-container");

  document.body.appendChild(navContainer);

  const h1 = createNavHeading();
  navContainer.append(h1);
};

const createNavHeading = () => {
  const h1 = document.createElement("h1");

  h1.innerText = "Nav Heading";
  h1.setAttribute("class", "nav-heading nav-items");

  return h1;
};
