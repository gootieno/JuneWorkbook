export default () => {
  const bodyChildNodes = document.body.childNodes; // NodeList [text, div, text]
  console.log("body child nodes ", bodyChildNodes);

  const div = bodyChildNodes[1]; // NOT bodyChildNodes[0]

  const divChildNodes = div.childNodes; // NodeList [text, span, text]
  const helloWorld = divChildNodes[0].textContent; // Hello World!\n

  console.log("div child node text content ", helloWorld);
  console.log('div inner text ', divChildNodes[1].innerText)
  const span = divChildNodes[1]; // <span>Yes!</span>
  // debugger
};
