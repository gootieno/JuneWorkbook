const http = require("http");
const fs = require("fs");

const comments = [];

const getContentType = (ext) => {
  switch (ext) {
    case "css":
      return "text/css";
    case "js":
      return "text/javascript";
    default:
      return "text/plain";
  }
};

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  let resBody = "";
  req.on("data", (data) => {
    resBody += data;
  });

  req.on("end", () => {
    if (resBody) {
      req.body = resBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("=")) //[[query,Mars+Rover%21],[affiliate,nasa]]
        .map(([key, val]) => [key, val.replace(/\+/g, " ")]) //[[query,Mars Rover%21],[affiliate,nasa]]
        .map(([key, val]) => [key, decodeURIComponent(val)]) //[[query,Mars Rover!],[affiliate,nasa]]
        .reduce((accum, [key, val]) => {
          accum[key] = val;
          return accum;
        }, {});
    }
    console.log(req.body);
    if (req.method === "GET" && req.url.startsWith("/static")) {
      const urlParts = req.url.split("/static");
      console.log("url parts ", urlParts);

      const assetPath = urlParts[1];
      const extension = assetPath.split(".")[1];
      
      const responseBody = fs.readFileSync("./assets" + assetPath);

      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(extension));
      return res.end(responseBody);
    }

    if (req.method === "GET" && req.url === "/") {
      const htmlPage = fs.readFileSync("index.html", "utf-8");

      let commentsList = "";

      for (const comment of comments) {
        commentsList += `<p>${comment}</p>`;
      }

      const responseBody = htmlPage.replace(
        /#{comments}/,
        comments.length ? commentsList : `<span>No Comments Created</span>`
      );

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      return res.end(responseBody);
    }

    if (req.method === "POST" && req.url === "/comments") {
      const { comment } = req.body;
      comments.push(comment);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    }
  });
});

const port = 5000;
server.listen(port, () => console.log(`listening on port ${port}`));
