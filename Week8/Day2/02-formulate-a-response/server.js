// require packages
const http = require("http");
// create server save to variable
const server = http.createServer((req, res) => {
  console.log("request object ", req);

  // create a response body
  const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;
  // set status code
  res.statusCode = 200;
  // set header
  res.setHeader("Content-Type", "text/html");
  // end response and/or send response body
  //   res.write(responseBody);
  return res.end(responseBody);
});
// all server login in create server function

// set a port
const port = 5000;
// listen on the port
server.listen(port, () => console.log(`listening on port ${port}`));
