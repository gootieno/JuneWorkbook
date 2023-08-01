const http = require("http");

let postId = 1
const getNewPostId = () => {
  const nextPostId = postId++
}
const posts = [{ id: 1, post: "hello" }, {id: getNewPostId()}];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/dogs/:dogId") {
    // do stuff
    const responseBody = "dog route hit";

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end(responseBody);
  }
  const responseBody = "server is working";

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  return res.end(responseBody);
});

const port = 8080;
server.listen(port, () => console.log("server listening on port ", port));
