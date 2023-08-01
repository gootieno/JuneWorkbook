const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Your code here

  // handle get request for index html


  // handle get request for image file


  // handle get request for css file
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));