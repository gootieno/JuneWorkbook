import { getDog } from "./dog.js";
import { createNavContainer } from "./navbar.js";

const initializePage = async () => {
  createNavContainer();
  const dogUrl = await getDog();
  console.log("dog url from initialize page ", dogUrl);
};

window.onload = initializePage;
