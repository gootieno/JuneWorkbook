export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log("body child elements ", bodyChildElements);

  const div = bodyChildElements[0];

  const divChildElements = div.children; // HTMLCollection [span]
  console.log("div children ", divChildElements);
  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  console.log("div inner text ", helloWorld);
  const span = divChildElements[0]; // <span>Yes!</span>

  for (let i = 0; i < divChildElements.length; i++) {
    const nextElement = document.createElement("span");
    nextElement.innerText = "another element";
    div.appendChild(nextElement);

    if (i === 50) break;
  }

  // debugger
};
